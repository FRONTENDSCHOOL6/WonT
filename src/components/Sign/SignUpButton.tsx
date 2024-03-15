function SignUpButton({ text = '' }) {
  return (
    <div>
      <button
        type="button"
        className="text-color-white h-[3.125rem] w-80 rounded-md bg-white text-contentsSecondary"
      >
        {text}
      </button>
    </div>
  );
}

export default SignUpButton;
