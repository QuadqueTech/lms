<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'learnq', 'username' => 'admin@learnq.com', 'email' => 'admin@learnq.com', 'password' => bcrypt('admin@learnq.com')],
            ['name' => 'Rajin', 'username' => 'rajin@gmail.com', 'email' => 'rajin@gmail.com', 'password' => bcrypt('rajin@gmail.com')],
            ['name' => 'Zakaria', 'username' => 'zakaria@gmail.com', 'email' => 'zakaria@gmail.com', 'password' => bcrypt('zakaria@gmail.com')],
            ['name' => 'Shere Ali', 'username' => 'shere1895@gmail.com', 'email' => 'shere1895@gmail.com', 'password' => bcrypt('shere1895@gmail.com')],
        ];

        User::insert($data);
    }
}
