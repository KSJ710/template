import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const New = (): JSX.Element => {
  return (
    <form action="/api/member/new" method="post">
      <label htmlFor="name">
        Name:
        <input type="text" name="name" className="border-2" />
      </label>
      <label htmlFor="email">
        email:
        <input type="text" name="email" className="border-2" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" className="border-2" />
      </label>
      <input type="submit" value="Submit" className="px-4 mt-2 bg-cyan-300 rounded-full " />
    </form>
  );
};

export default New;
