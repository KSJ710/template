import React, { createContext, useState } from 'react';
import { PrismaClient } from '@prisma/client';
import Temp00001 from 'src/components/templates/Temp00001';
import EditTools from 'src/components/layout/EditTools';

export const EditContext = createContext(
  {} as {
    color: string;
    setColor: React.Dispatch<string>;
    currentTarget: HTMLElement;
    setCurrentTarget: React.Dispatch<HTMLElement>;
    display: string;
    setDisplay: React.Dispatch<string>;
  }
);
const Template = () => {
  const [currentTrget, setCurrentTarget] = useState<HTMLElement | null>(null);
  const [display, setDisplay] = useState<string>('none');
  const [color, setColor] = useState<string>(null);
  const editVar = {
    color: color,
    setColor: setColor,
    currentTarget: currentTrget,
    setCurrentTarget: setCurrentTarget,
    display: display,
    setDisplay: setDisplay,
  };

  return (
    <>
      <EditContext.Provider value={editVar}>
        <EditTools />
        <Temp00001 />
      </EditContext.Provider>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const prisma: PrismaClient = new PrismaClient();
//   const color: Color[] = await prisma.color.findMany({});
//   return {
//     props: { color },
//   };
// };

export default Template;
