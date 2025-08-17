import SignupForm from '@/app/ui/signup-form';

export default function SignupPage() {
  return (
    <main className="flex items-center justify-center h-dvh">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <h1 className="text-2xl font-bold text-center">Create an Account</h1>
        <SignupForm />
      </div>
    </main>
  );
}