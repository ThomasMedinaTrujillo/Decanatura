import Button from './Button';



export default function CTASection({text}: {text: string}) {
  return (
    <section className="mb-16 text-center">
      <Button variant="primary" size="lg">
        {text}
      </Button>
    </section>
  );
}
