import { mockTeam } from "./mock-data";

interface Props {
  params: { slug: string };
}

export default function TeamMember({ params }: Props) {
    const member = mockTeam.find(m => m.slug === params.slug);

    if (!member) return <p>Member not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold">{member.name}</h1>
      <div className="py-0.5">
        <p className="text-lg text-gray-600">{member.tagline}</p>
      </div>
      <div className="py-0.5">
        <p className="mt-4">{member.biography}</p>
      </div>
      <div className="py-0.5">
        <p className="text-lg text-gray-600">{member.approaches}</p>
      </div>
      <div className="py-0.5">
        <p className="text-lg text-gray-600">{member.topics}</p>
      </div>
      <div className="py-0.5">
        <p className="text-lg text-gray-600">{member.education}</p>
      </div>
      <div className="pt-2">
        <p className="text-lg text-gray-600 italic">"{member.quote}"</p>
      </div>
     
    </div>
  );
}