from pathlib import Path
import shutil
import subprocess

import imageio_ffmpeg


SOURCE = Path(r"E:\broverse.in")
PROJECT = Path(__file__).parent
PUBLIC = PROJECT / "public"
VIDEO_ROOT = PUBLIC / "videos"
THUMB_ROOT = PUBLIC / "thumbnails"
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()


for folder in (
    VIDEO_ROOT / "festivals",
    VIDEO_ROOT / "lifestyle",
    VIDEO_ROOT / "entertainment",
    VIDEO_ROOT / "events",
    THUMB_ROOT,
):
    folder.mkdir(parents=True, exist_ok=True)

videos = sorted(SOURCE.glob("*.mp4"))
for index, video in enumerate(videos, start=1):
    safe_name = f"broverse-{index:02d}.mp4"
    destination = VIDEO_ROOT / "lifestyle" / safe_name
    shutil.copy2(video, destination)

    thumbnail = THUMB_ROOT / f"broverse-{index:02d}.jpg"
    subprocess.run(
        [
            FFMPEG,
            "-y",
            "-ss",
            "00:00:01",
            "-i",
            str(destination),
            "-frames:v",
            "1",
            "-vf",
            "scale=540:-2",
            "-q:v",
            "2",
            str(thumbnail),
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=True,
    )

print(f"Prepared {len(videos)} videos and thumbnails.")
