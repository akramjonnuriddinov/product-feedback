let object1 = [
  {
    id: '3481fbbf-90c2-4490-a30a-3da6d49f38f9',
    title: '12',
    detail: '12',
    category: 'Feature',
  },
  {
    id: '3481fbbf-90c2-4490-a30a-3da6d49f38f9',
    title: '12',
    detail: '12',
    category: 'Bug',
  },
  {
    id: '3481fbbf-90c2-4490-a30a-3da6d49f38f9',
    title: '12',
    detail: '12',
    category: 'Bug',
  },
]

// console.log(Object.keys(object1))
object1 = object1.filter((item) => item.category == 'Bug')
console.log(object1)

// Expected output: Array ["a", "b", "c"]
