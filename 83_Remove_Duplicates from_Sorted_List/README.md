# LeetCode 83: Remove Duplicates from Sorted List

## 問題概要
ソート済み連結リストから重複する要素を削除し、各要素が一度だけ現れるようにする問題。

## 解法

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 入力例: 1,1,2
  // 出力: 1,2
  let current = head;

  while (current && current.next) {
    //重複していたら次の次のnodeを左に詰めるイメージ
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
```

## アルゴリズム解説

1. **現在のノードから開始**: `current`ポインタでリストを順次処理
2. **重複チェック**: 現在のノードと次のノードの値を比較
3. **重複削除**: 値が同じ場合、次のノードをスキップして削除
4. **ポインタ移動**: 重複がない場合のみ`current`を次に進める
5. **終了条件**: `current`または`current.next`がnullになるまで続行

## 計算量
- **時間計算量**: O(n) - リストを一度だけ走査
- **空間計算量**: O(1) - 追加のデータ構造は使用しない

## 実行例
```
入力: [1,1,2]
出力: [1,2]

入力: [1,1,2,3,3]
出力: [1,2,3]
```