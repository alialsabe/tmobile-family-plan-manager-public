import { people } from "../../billData";
import PersonClient from "./PersonClient";

export function generateStaticParams() {
  return people.map((person) => ({ id: person.id }));
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PersonClient personId={id} />;
}
