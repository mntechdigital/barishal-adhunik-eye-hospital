"use client";

import { useState, useTransition } from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { createCampaign } from "@/services/campaign.service";
import { toast } from "sonner";

const CreateCampaign = () => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      image: null as File | null,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    startTransition(async () => {
      const file = data?.image;

      if (!file) return;

      const imageUrl = await uploadToCloudinary(file);

      const response = await createCampaign({ image: imageUrl });

      console.log(response);

      if (response?.success) {
        setOpen(false);
        form.reset();
        setPreview(null);
        toast.success(response.data?.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600 cursor-pointer">
          Add Campaign
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Campaign</DialogTitle>
          <DialogDescription>
            Upload your campaign image file here.
          </DialogDescription>
        </DialogHeader>

        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mt-3"
          >
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Image (Must be 268x400 pixels)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file =
                          (e.target as HTMLInputElement).files?.[0] ?? null;
                        field.onChange(file);
                        if (file) {
                          const url = URL.createObjectURL(file);
                          setPreview(url);
                        } else {
                          setPreview(null);
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload a JPG, PNG, or WebP image under 5MB.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {preview && (
              <div className="rounded-lg overflow-hidden border p-2 flex flex-col items-center bg-gray-50">
                <Image
                  src={preview}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="mt-3"
                  onClick={() => {
                    setPreview(null);
                    form.setValue("image", null);
                  }}
                >
                  Remove
                </Button>
              </div>
            )}

            <div className="flex justify-end">
              <Button
                disabled={isPending}
                type="submit"
                className="bg-green-500 hover:bg-green-600"
              >
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCampaign;
