class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(key) {
    let curr = this.root;

    for (let i of key) {
      let index = i.charCodeAt(0) - 'a'.charCodeAt(0);

      if (curr.children[index] === null) {
        curr.children[index] = new TrieNode();
      }

      curr = curr.children[index];
    }

    curr.isEndOfWord = true;
  }

  search(key) {
    let curr = this.root;
    for (let i of key) {
      let index = i.charCodeAt(0) - 'a'.charCodeAt(0);

      if (curr.children[index] === null) return false;

      curr = curr.children[index];
    }

    return curr.isEndOfWord;
  }

  remove(root = this.root, key, depth) {
    if (root == null) return null;

    if (depth === key.length) {
      if (root.isEndOfWord) {
        root.isEndOfWord = false;
      }

      if (this.isEmpty()) {
        root = null;
      }

      return root;
    }

    let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);

    root.children[index] = this.remove(root.children[index], key, depth + 1);

    if (this.isEmpty() && root.isEndOfWord === false) {
      root = null;
    }

    return root;
  }

  isEmpty() {
    for (let i = 0; i < 26; i++)
      if (this.root.children[i] !== null) return false;

    return true;
  }

  restoreWords() {
    let words = [];
    this._dfs(this.root, '', words);
    return words;
  }

  /** DFS helper function */
  _dfs(node, prefix, words) {
    if (node.isEndOfWord) {
      words.push(prefix);
    }

    for (let i = 0; i < 26; i++) {
      if (node.children[i] !== null) {
        let char = String.fromCharCode(i + 'a'.charCodeAt(0));
        this._dfs(node.children[i], prefix + char, words);
      }
    }
  }
}

const trie = new Trie();
let arr = ['and', 'ant', 'apple', 'bat', 'cat'];

for (let s of arr) {
  trie.insert(s);
}

trie.remove(undefined, 'ant', 0);

console.log("After Removing 'ant':", trie.restoreWords());
