/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { editToolsDisplayState } from 'src/states/atoms/tempAtoms';
import { tempHeadNumberState } from 'src/states/atoms/tempAtoms';
import BackgroundColor from 'src/components/edit_tools/BackgroundColor';
import styles from './EditTools.module.scss';

const EditToolBox = (): JSX.Element => {
  const [editToolDisplay, setEditToolDisplay] = useRecoilState(editToolsDisplayState);
  const [display, setDisplay] = useState<classDisplay>('none');
  const setHead = useSetRecoilState(tempHeadNumberState);

  const hundleHiddenEditTools = () => {
    setDisplay('none');
    setEditToolDisplay('none');
  };
  const hundleShowBgColor = (e) => {
    e.stopPropagation();
    setDisplay('flex');
    setEditToolDisplay('none');
  };
  const hundleChangeLayoutParts = () => {
    setHead(2);
  };

  return (
    <>
      <div
        style={{ display: editToolDisplay }}
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
              文字フォントを変える
            </li>
            <li className="cursor-pointer" onClick={hundleChangeLayoutParts}>
              コンポーネント変更する
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
