<?php

namespace App\Http\Resources\Academic;

use Illuminate\Http\Resources\Json\JsonResource;

class CourseCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'          => $this->id,
            'namne'       => $this->namne,
            'slug'        => $this->slug,
            'description' => $this->description,
            'thumbnail'   => $this->thumbnail,
            'level'       => $this->level,
        ];
    }
}
