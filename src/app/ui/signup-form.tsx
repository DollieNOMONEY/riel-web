// app/ui/signup-form.tsx
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signup } from '@/app/lib/actions';
import Link from 'next/link';
import { type SignupFormState } from '@/app/lib/definitions';

export default function SignupForm() {
  const initialState: SignupFormState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(signup, initialState);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <div className="w-full">
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="name">Name</label>
            <input className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500" id="name" type="text" name="name" placeholder="Enter your name" required />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="email">Email</label>
            <input className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500" id="email" type="email" name="email" placeholder="Enter your email address" required />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email && state.errors.email.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">Password</label>
            <input className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500" id="password" type="password" name="password" placeholder="Enter password" required minLength={6} />
             <div id="password-error" aria-live="polite" aria-atomic="true">
              {state.errors?.password && state.errors.password.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
          </div>
           <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="confirmPassword">Confirm Password</label>
            <input className="peer block w-full rounded-md border border-gray-200 py-[9px] px-3 text-sm outline-2 placeholder:text-gray-500" id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm password" required minLength={6} />
             <div id="confirmPassword-error" aria-live="polite" aria-atomic="true">
              {state.errors?.confirmPassword && state.errors.confirmPassword.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
            </div>
          </div>
        </div>
        <SignupButton />
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
            {state.message && <p className="text-sm text-red-500">{state.message}</p>}
        </div>
        <div className="text-center text-sm mt-4">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-blue-600 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </form>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();
  return (
    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300" disabled={pending}>
      {pending ? 'Creating Account...' : 'Sign Up'}
    </button>
  );
}