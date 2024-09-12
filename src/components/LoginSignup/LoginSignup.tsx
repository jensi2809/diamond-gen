import React from 'react';
import SocialButton from './SocialButton';

const LoginSignup: React.FC = () => {
  const socialButtons = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d23b6711b4ddc25b1e13e848b7e7cd0b51fd33b2aed53c0ddd04eeb4cfe446af?placeholderIfAbsent=true&apiKey=0a60cade3eee49188dd76722c1ea9af2", text: "Continue with Google" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ed59be313a3ed9188de472e6a996bfe90c3916c7b73b7e4f051c91013fbdd59?placeholderIfAbsent=true&apiKey=0a60cade3eee49188dd76722c1ea9af2", text: "Continue with Facebook" }
  ];

  return (
    <main className="flex justify-center overflow-hidden gap-2.5 items-center p-14 bg-white border border-gray-100 border-solid shadow-2xl max-md:px-5">
      <section className="flex flex-col justify-center items-center self-stretch my-auto min-w-[240px] max-w-[528px] max-md:max-w-full">
        <h1 className="text-3xl font-medium text-center text-zinc-800">
          Log in or sign up
        </h1>
        <form className="mt-12 w-full max-md:mt-10">
            <label>Email</label>
        <input
        type="email"
        id="email"
        className="mt-1 px-4 w-full border border-solid border-stone-500 border-opacity-30 min-h-[56px] max-md:max-w-full"
        aria-label="Email input"
      />
          <button
      type="submit"
      className="flex overflow-hidden flex-col justify-center items-center px-16 py-5 mt-4 w-full text-2xl font-medium text-center text-white bg-neutral-900 max-w-[528px] max-md:px-5 max-md:max-w-full"
    >
      <span className="gap-2 self-stretch">Continue</span>
    </button>
        </form>
        <div className="flex flex-wrap gap-6 items-center mt-12 w-full text-xl font-medium text-gray-200 whitespace-nowrap max-md:mt-10">
      <div className="flex flex-1 shrink self-stretch my-auto h-0.5 bg-gray-200 basis-0 w-[227px]" />
      <span className="self-stretch my-auto">OR</span>
      <div className="flex flex-1 shrink self-stretch my-auto h-0.5 bg-gray-200 basis-0 w-[227px]" />
    </div>

        <div className="flex flex-col justify-center items-center mt-12 w-full text-2xl font-[450] text-zinc-800 max-md:mt-10">
          <div className="flex flex-col justify-center items-center w-full">
            {socialButtons.map((button, index) => (
              <SocialButton key={index} icon={button.icon} text={button.text} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginSignup;