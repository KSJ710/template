/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { editToolsDisplayState } from 'src/states/atoms/tempAtoms';
import BackgroundColor from 'src/components/edit_tools/BackgroundColor';
import styles from './EditTools.module.scss';

const EditToolBox = (): JSX.Element => {
  const [editDisplayTools, setEditDisplayTools] = useRecoilState(editToolsDisplayState);
  const [display, setDisplay] = useState<classDisplay>('none');

  const hundleHiddenEditTools = () => {
    setDisplay('none');
    setEditDisplayTools('none');
  };
  const hundleShowBgColor = (e) => {
    e.stopPropagation();
    setDisplay('flex');
    setEditDisplayTools('none');
  };
  return (
    <>
      <div
        style={{ display: editDisplayTools }}
        className="modal_bg"
        onClick={hundleHiddenEditTools}
      >
        <div className="p-3 w-4/5 bg-[#006e54] text-[#e6b422] trbl_center">
          <p className="mb-4 text-2xl">変更したい項目を選んで下さい</p>
          <ul className="flex flex-col gap-3 pl-3 font-thin leading-4">
            <li className="cursor-pointer" onClick={hundleShowBgColor}>
              背景カラー
            </li>
            <li className="cursor-pointer" onClick={hundleShowBgColor}>
              文字サイズ
            </li>
            <li className="cursor-pointer" onClick={hundleShowBgColor}>
              テキストテキスト
            </li>
            <li className="cursor-pointer" onClick={hundleShowBgColor}>
              テキストテキスト
            </li>
          </ul>
        </div>
      </div>
      <BackgroundColor display={display} setDisplay={setDisplay} />
    </>
  );
};

export default EditToolBox;
