function MainTitle({ text = '' }) {
  return (
    <div className="mb-[1.625rem] h-[2.5rem] w-[20rem] border-b border-gray-200">
      <p className="text-2xl font-bold">{text}</p>
    </div>
  );
}

export default MainTitle;
