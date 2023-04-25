import { Component } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-bgm',
  templateUrl: './bgm.component.html',
  styleUrls: ['./bgm.component.scss'],
})
export class BgmComponent {
  readonly bgms = [
    '01 ～オープニング～.wav',
    '02 マサラタウンのテーマ.wav',
    '07 戦い（ＶＳ野生ポケモン）.wav',
    '10 ポケモンセンター.wav',
    '20 ポケモンジム.wav',
    '30 サイクリング.wav',
  ];
  tracks = {
    selected: this.bgms[0],
    playing: '',
  };
  sound: Howl | null = null;
  volume = 0.05;

  play() {
    this.pause();
    if (this.tracks.selected !== this.tracks.playing) {
      this.sound = new Howl({
        src: `assets/bgm/${this.tracks.selected}`,
        volume: this.volume,
        loop: true,
        onplay: () => (this.tracks.playing = this.tracks.selected),
      });
    }
    this.sound?.play();
  }

  pause() {
    this.sound?.pause();
  }

  changeVolume() {
    this.sound?.volume(this.volume);
  }
}
