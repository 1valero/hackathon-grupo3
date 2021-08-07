<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ImageProcessorController extends Controller
{
    public function upload(Request $request)
    {
        $result = $request->file('photo')->store('api/photos');

        return response()->json([
            "results" => $result,
            "status" => "OK"
        ], Response::HTTP_OK);
    }
}
