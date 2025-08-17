// app/(auth)/login/page.tsx
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-dvh">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <h1 className="text-2xl font-bold text-center">Log in to Riel AI</h1>
        <LoginForm />
      </div>
    </main>
  );
}
