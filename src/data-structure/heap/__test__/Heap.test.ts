import { Heap } from '@/data-structure/heap';


describe('Heap', () => {
  it('should not allow to create instance of the Heap directly', () => {
    const instantiateHeap = () => {
      // @ts-ignore 跳过编译时检查
      const heap = new Heap();
      heap.add(5);
    };

    expect(instantiateHeap).toThrow();
  });
});