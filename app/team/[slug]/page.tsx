import TeamMember from '@/src/components/Team/TeamMember'
import DefaultLayout from '@/src/Layouts/DefaultLayout'

interface Props {
  params: { slug: string }
}

export default function TeamMemberPage({ params }: Props) {
  return (
    <DefaultLayout>
      <TeamMember params={params} />
    </DefaultLayout>
  )
}
