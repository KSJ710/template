import React from 'react';
import Base from 'src/components/templates/layout/Base';
import EditTools from 'src/components/edit_tools/EditTools';

const Template = (): JSX.Element => {
  return (
    <>
      <EditTools />
      <Base />
    </>
  );
};

export default Template;
