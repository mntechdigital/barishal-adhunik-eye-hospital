import { LoginForm } from "./_components/LoginForm";

const AdminLoginPage = () => {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <section className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-primary to-accent p-12">
        <div className="max-w-md text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Welcome to Admin
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Manage your business with powerful tools and insights
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-semibold">✓</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-primary-foreground">
                  Customize Upcoming Campaign
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  Create and manage your upcoming campaigns
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-semibold">✓</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-primary-foreground">
                  Secure Access
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  Enterprise-grade security
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-semibold">✓</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-primary-foreground">
                  24/7 Support
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  Always here to help you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Admin Login
            </h2>
            <p className="text-muted-foreground">
              Sign in to your admin account
            </p>
          </div>

          <LoginForm />
        </div>
      </section>
    </main>
  );
};

export default AdminLoginPage;
