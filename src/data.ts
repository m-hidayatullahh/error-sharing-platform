export interface ErrorPost {
  id: number;
  title: string;
  description: string;
  code: string;
  language: string;
  tags: string[];
  author: string;
  date: string;
}

export const posts: ErrorPost[] = [
  {
    id: 1,
    title: "TypeError: Cannot read property 'map' of undefined in React",
    description: "I'm trying to map through an array in React but getting this error. Here's my code that's causing the issue:",
    code: `function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}`,
    language: 'jsx',
    tags: ['react', 'javascript', 'typescript'],
    author: "dayatdev",
    date: "2 hours ago"
  },
  {
    id: 2,
    title: "CORS Policy Error when fetching API in Next.js",
    description: "Getting CORS error while trying to fetch data from external API in Next.js application. Here's the problematic code:",
    code: `export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return {
    props: { data }
  };
}`,
    language: 'typescript',
    tags: ['nextjs', 'api', 'cors'],
    author: "dayatdev",
    date: "5 hours ago"
  },
  {
    id: 3,
    title: "React useState not updating immediately",
    description: "I'm having issues with useState hook not updating the state immediately after setting it. Here's my code:",
    code: `function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // Still shows old value
  };
  
  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}`,
    language: 'jsx',
    tags: ['react', 'hooks', 'state-management'],
    author: "dayatdev",
    date: "1 day ago"
  }
];