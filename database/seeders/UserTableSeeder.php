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
            ['name' => 'learnq', 'email' => 'admin@learnq.com', 'password' => bcrypt('admin@learnq.com')],
            ['name' => 'Rajin', 'email' => 'rajin@gmail.com', 'password' => bcrypt('rajin@gmail.com')],
            ['name' => 'Zakaria', 'email' => 'zakaria@gmail.com', 'password' => bcrypt('zakaria@gmail.com')],
            ['name' => 'Shere Ali', 'email' => 'shere1895@gmail.com', 'password' => bcrypt('shere1895@gmail.com')],
        ];

        User::insert($data);
    }
}
