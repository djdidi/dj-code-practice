import { LinkedList } from '@/data-structure/linked-list';

const DEFAULT_HASH_TABLE_SIZE = 32;

type Bucket = { key: string; value: any };

export class HashTable {
  buckets: LinkedList<Bucket>[];
  // 记录一下key => hash映射
  keys: Record<string, number>;

  constructor(hashTableSize = DEFAULT_HASH_TABLE_SIZE) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  hash(key: string) {
    let codeSum = 0;
    for (let i = 0; i < key.length; i++) {
      codeSum += key.charCodeAt(i);
    }

    return codeSum % this.buckets.length;
  }

  set(key: Bucket['key'], value: Bucket['value']) {
    const hashKey: number = this.hash(key);
    this.keys[key] = hashKey;
    const linkedList = this.buckets[hashKey];
    const node = linkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      node.val.value = value;
    } else {
      linkedList.append({ key, value });
    }
  }

  delete(key: Bucket['key']) {
    const hashKey = this.hash(key);
    delete this.keys[key];

    const linkedList = this.buckets[hashKey];
    const node = linkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });
    if (node) {
      return linkedList.delete(node.val);
    } else {
      return null;
    }
  }

  get(key: Bucket['key']) {
    const hashKey = this.keys[key] || this.hash(key);

    const linkedList = this.buckets[hashKey];
    const node = linkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    return node ? node.val.value : undefined;
  }

  has(key: Bucket['key']): boolean {
    return Object.hasOwn(this.keys, key);
  }

  getKeys(): string[] {
    return Object.keys(this.keys);
  }

  getValues(): any[] {
    let values = [];

    this.buckets.forEach(linkedList => {
      values = [...values, ...linkedList.toArray().map(bucket => bucket.value)];
    });

    return values;
  }
}
