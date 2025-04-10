export interface ErrorPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  descriptionBefore: string;
  code: string;
  descriptionAfter: string;
  language: string;
  tags: string[];
  author: string;
  date: string;
}

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const data = [
  {
    id: 1,
    title: "Laravel : Unknown collation: 'utf8mb4_0900_ai_ci'",
    excerpt: `Cara mengatasi error Unknown collation: 'utf8mb4_0900_ai_ci' di Laravel`,
    descriptionBefore: `Cara mengatasi error Unknown collation: <strong>'utf8mb4_0900_ai_ci'</strong> di Laravel, 
    Jika teman-teman mendapatkan error Unknown collation: 'utf8mb4_0900_ai_ci' saat menjalankan proses migrate di Laravel. <br/> Maka teman-teman bisa mencoba solusi berikut ini.
    Berikut ini adalah beberapa solusi yang mungkin bisa membantu kamu.<br/>
    Silahkan teman-teman tambahkan kode berikut ini di dalam file .env, atau tepatnya dibawah kode DB_PASSWORD=.`,
    code: `DB_COLLATION=utf8mb4_unicode_ci`,
    descriptionAfter: `Sekarang silahkan teman-teman lakukan proses migrate ulang. <br/>
    Terima Kasih`,
    language: 'Laravel',
    tags: ['laravel', 'database'],
    author: "dayatdev",
    date: "1 hours ago"
  },
  {
    id: 2,
    title: "How to Re-render Screen after leave Screen on React Native Navigation",
    excerpt: "How to solve React Native Stuck or Hangs at info Starting JS server",
    descriptionBefore: `Mungkin teman-teman bertanya-tanya, bagaimana cara me-render ulang sebuah screen di React Native setelah kita berpindah ke screen lain.
    excerpt: Cara mengatasi error Unknown collation: 'utf8mb4_0900_ai_ci' di Laravel,
    Berikut ini cara mudah yang bisa teman-teman tambahkan di dalam konfigurasi React Native Navigation. <br/> <br/> <br/>
    Kita bisa dengan cara menambahkan unmountOnBlur: true, kurang lebih seperti berikut ini:`,
    code: `
    <Tab.Navigator 
    screenOptions={{ unmountOnBlur: true }}
    >
    ...
    </Tab.Navigator>`,
    descriptionAfter: `Terima Kasih.`,
    language: 'React',
    tags: ['laravel', 'database'],
    author: "dayatdev",
    date: "1 hours ago"
  },
  {
    id: 3,
    title: "Laravel Migration : Syntax error or access violation, Specified key was too long",
    excerpt: "Berikut ini cara bagaimana mengatasi error : Syntax error or access violation, Specified key was too long di dalam Laravel",
    descriptionBefore: `Pernahkah teman-teman saat menjalankan perintah php artisan migrate di <br/>
    dalam Laravel dan mendapatkan error seperti berikut ini : <br/> <br/>
    <strong>SOLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long;</strong> <br/> <br/>
    Secara default, Laravel menggunakan character set utf8mb4. Jika teman-tenan menjalankan versi MySQL yang lebih lama dari rilis 5.7.7 atau MariaDB yang lebih lama dari 10.2.2, maka teman-teman bisa mengaturnya secara manual. dan berikut ini bagaimana cara mengatasi problem tersebut. <br/> <br/>
    Untuk mengatasi problem tersebut, silahkan teman-teman buka file /app/Providers/AppServiceProvider.php, kemudian sesuaikan sehingga menjadi seperti berikut ini.`,
    code: 
  `use Illuminate\Support\Facades\Schema;
 
/**
* Bootstrap any application services.
*/
public function boot(): void
{
Schema::defaultStringLength(191);
}`,
    descriptionAfter: `Dan sekarang silahkan teman-teman jalankan perintah php artisan migrate lagi, maka error tersebut sudah tidak akan muncul lagi. </br>
    Terima Kasih <br/> <br/> <br/>
    <strong>Referensi:</strong> <a class="text-blue" href="https://laravel.com/docs/10.x/migrations#index-lengths-mysql-mariadb" target="_blank">https://laravel.com/docs/10.x/migrations#index-lengths-mysql-mariadb</a>`,
    language: 'React',
    tags: ['laravel', 'database'],
    author: "dayatdev",
    date: "1 hours ago"
  }
];

export const posts: ErrorPost[] = data.map(post => ({
  ...post,
  slug: slugify(post.title)
}));
