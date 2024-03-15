interface LocalNameProps {
  children: string;
}

function LocalName({ children }: LocalNameProps) {
  return (
    <dl>
      <dt className="sr-only">지역명</dt>
      <dd className="text-lg font-medium text-contentsPrimary">{children}</dd>
    </dl>
  );
}

export default LocalName;
