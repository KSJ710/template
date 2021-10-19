import { GetServerSideProps } from "next"
import { InferGetServerSidePropsType } from "next"
import { PrismaClient } from "@prisma/client"

const Users = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const ListUser = user.map((user) => (
    <li key={user.id} className='list-none'>
      <h1>{`${user.name} ${user.age}`}</h1>
    </li>
  ))
  const Users = <ul className='container mx-auto w-full'>{ListUser}</ul>

  return Users
}
export const getServerSideProps: GetServerSideProps = async () => {
  type User = {
    id: number
    name: string
    age: number
  }

  const prisma: PrismaClient = new PrismaClient()
  const user: User[] = await prisma.user.findMany({})
  return {
    props: { user },
  }
}

export default Users
