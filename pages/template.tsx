import React from "react"
import { GetServerSideProps } from "next"
import { InferGetServerSidePropsType } from "next"
import { PrismaClient } from "@prisma/client"
import Temp00001 from "components/Tamplate/Temp00001"

const Template = ({
  color,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Temp00001 color={color} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  type bgColor = {
    id: number
    name: string
    className: string
  }

  const prisma: PrismaClient = new PrismaClient()
  const color: bgColor[] = await prisma.color.findMany({})
  return {
    props: { color },
  }
}

export default Template
