'use client';

import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-center mb-4">CertMaster Pro</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Achieve your certification goals with our exam simulations and personalized learning
        paths.
      </p>
      <div className="flex space-x-4">
        <Button onClick={() => router.push('/login')}>Login</Button>
        <Button variant="secondary" onClick={() => router.push('/register')}>
          Register
        </Button>
      </div>
    </div>
  );
}
