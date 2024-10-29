'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';
import classes from './AuthForm.module.css';

const createUser = async (name: string, email: string, password: string) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-type': 'application/json' },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return data;
};

const AuthForm = () => {
  const params = useSearchParams();
  const originalUrl = params.get('callbackUrl');
  const pathName = originalUrl && new URL(originalUrl)?.pathname;

  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();
  const nameInputRef = useRef<any>();
  const router = useRouter();

  const switchAuthModeHandler = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const name = nameInputRef?.current?.value;
    const email = emailInputRef?.current?.value;
    const password = passwordInputRef?.current?.value;
    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });
      if (!result?.error) {
        // set some state
        if (pathName) {
          router.replace(pathName);
        } else {
          router.replace('/');
        }
      }
    } else {
      try {
        const response = await createUser(name, email, password);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          {!isLogin && (
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required ref={nameInputRef} />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
          <a
            className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            style={{ backgroundColor: '#ffffff', color: 'gray' }}
            onClick={() =>
              signIn('google', {
                callbackUrl: '/meals',
                redirect: false,
              })
            }
            role="button"
          >
            <Image
              className="pr-2"
              src="/images/google.svg"
              alt=""
              style={{ height: '2rem' }}
            />
            Continue with Google
          </a>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
