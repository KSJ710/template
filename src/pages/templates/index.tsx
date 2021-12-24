import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentLayoutPart,
  currentTargetState,
  editToolsDisplayState,
} from 'src/states/atoms/tamplate_atoms';
import Base from 'src/components/templates/layout/Base';
import EditTools from 'src/components/templates/edit_tools/EditTools';

const Index = (): JSX.Element => {
  const setCurrentTarget = useSetRecoilState(currentTargetState);
  const setCurtLayPart = useSetRecoilState(currentLayoutPart);
  const [editToolDisplay, setEditToolsDisplay] = useRecoilState(editToolsDisplayState);

  // 編集パネルを表示する
  const handleToggleEditTools = (e) => {
    e.stopPropagation();
    // 編集するelementを設定する
    setCurrentTarget(e.currentTarget);

    const className: string = e.currentTarget.className;

    // レイアウトパーツの種類を配列化
    const layPartNames: string[] = ['Head'];
    // レイアウトパーツを断定するクラス名を検索
    const targetPartName: string = className.match(/_track_lay_part_.*/)[0];
    let resultPartName: string = 'resultPartName';
    for (let layPartName of layPartNames) {
      // 対象要素がどのパーツか確認、マッチしないなら-1でそれをビット反転し0にし、falseとする
      if (~targetPartName.indexOf(layPartName)) {
        resultPartName = layPartName;
        break;
      }
    }
    setCurtLayPart(resultPartName);

    //editToolの表示する
    setEditToolsDisplay('flex');
    // 背景スクロールを停止
    document.body.style.overflow = 'hidden';
  };

  return (
    <HandleContex.Provider value={handleToggleEditTools}>
      <Base />
      <EditTools />
    </HandleContex.Provider>
  );
};

export const HandleContex = React.createContext(
  {} as (event: React.MouseEvent<HTMLElement>) => void
);
export default Index;
