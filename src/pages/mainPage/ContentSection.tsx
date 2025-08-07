
export default function ContentSection({ heading, content }:{ heading: string; content: string } ) {
  return (
	<section>
	  <h2 className="text-2xl font-bold">{heading}</h2>
	  <p>{content}</p>
	</section>
  );
}