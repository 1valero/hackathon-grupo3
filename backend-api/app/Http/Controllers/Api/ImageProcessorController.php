<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ImageProcessorController extends Controller
{
    const BASE_GCS_ENDPOINT = "https://storage.googleapis.com/";

    public function upload(Request $request)
    {
        $filePath = $request->file('photo')->storePublicly('user_001','gcs');

        return response()->json([
            "results" => [
                "photo_url" => self::BASE_GCS_ENDPOINT . config('filesystems.disks.gcs.bucket') . DIRECTORY_SEPARATOR . $filePath,
            ],
            "status" => "OK"
        ], Response::HTTP_OK);
    }
}
