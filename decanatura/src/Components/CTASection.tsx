import Button from './Button';



export default function CTASection({text, onClick}: {text: string; onClick: () => void}) {
  return (
    <section className="mb-16 text-center">
      <Button onClick={onClick} variant="primary" size="lg">
        {text}
      </Button>
    </section>
  );
}
