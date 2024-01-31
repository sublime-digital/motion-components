import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './m-video-player/video-player.component';
import { AiChatbotComponent } from './m-ai-chatbot/ai-chatbot.component';
import { MusicPlayerComponent } from './m-music-player/music-player.component';
import { NewsReaderComponent } from './m-news-reader/news-reader.component';
import { PictureSlidersComponent } from './m-picture-sliders/picture-sliders.component';
import { CardsComponent } from './starter/cards/cards.component';
import { SliderComponent } from './starter/sliders/sliders.component';
import { SurveysComponent } from './pro/surveys/surveys.component';
import { PollsComponent } from './pro/polls/polls.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    AiChatbotComponent,
    MusicPlayerComponent,
    NewsReaderComponent,
    PictureSlidersComponent,
    CardsComponent,
    SliderComponent,
    SurveysComponent,
    PollsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
