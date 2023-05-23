type HeaderType = {
  title: string;
};

export function Info({ title }: HeaderType) {
  return (
    <>
      <header>
        <h1 className="main-title">{title}</h1>
      </header>
    </>
  );
}
