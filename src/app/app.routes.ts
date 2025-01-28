import { Routes } from '@angular/router';
import { LiveScoreComponent } from './components/live-score/live-score.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PlayersComponent } from './components/players/players.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { PointTableComponent } from './components/point-table/point-table.component';


export const routes: Routes = [
    {path:"",component: LiveScoreComponent},
    {path:"matches",component: MatchesComponent},
    {path:"players",component: PlayersComponent},
    {path:"pointstable",component: PointTableComponent},
    {path:"ranking",component: RankingComponent},
    {path:"**",component:NotfoundComponent}
];
