import React from "react"
import { GetServerSideProps } from "next"
import { InferGetServerSidePropsType } from "next"
import { PrismaClient } from "@prisma/client"
import Temp00001 from "components/Tamplate/Temp00001"

function Template({
  color,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(color)
  return <Temp00001 color={color} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()
  const color = await prisma.color.findMany({})
  console.log(color)
  return {
    props: { color },
  }
}

export default Template
