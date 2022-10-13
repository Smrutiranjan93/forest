import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 

import { AppComponent } from './app.component';
import { BodyComponent } from './common/body/body.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { AboutComponent } from './common/about/about.component';
import { AqiComponent } from './common/aqi/aqi.component';
import { EventsComponent } from './common/events/events.component';
import { FamousPlaceComponent } from './common/famous-place/famous-place.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { TouristPlaceComponent } from './common/tourist-place/tourist-place.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { UpdatingComponent } from './common/updating/updating.component';
import { JwtConnectionService } from './service/jwt-connection.service';
import { GrivanceComponent } from './user/grivance/grivance.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeptLogInComponent } from './auth/dept-log-in/dept-log-in.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { AreaBasedDevelopmentComponent } from './common/area-based-development/area-based-development.component';
import { ContactUsComponent } from './common/contact-us/contact-us/contact-us.component';
import { KeyPersonelComponent } from './common/key-personel/key-personel.component';
import { MissionAndVisionComponent } from './common/mission-and-vision/mission-and-vision.component';
import { EhelplineComponent } from './common/ehelpline/ehelpline.component';
import { EventsContentComponent } from './common/events-content/events-content.component';
import { GoutamBudhaParkComponent } from './common/goutam-budha-park/goutam-budha-park.component';
import { SaiTempleMdaComponent } from './common/sai-temple-mda/sai-temple-mda.component';
import { ViewAllEventsComponent } from './common/view-all-events/view-all-events.component';
import { CalendarComponent } from './common/calendar/calendar.component';
import {HealthcontentComponent} from './common/healthcontent/healthcontent.component'
import {CalenderdataComponent} from './common/calenderdata/calenderdata.component';
import {EventlistComponent} from './common/eventlist/eventlist.component';
import {EventdetailsComponent} from './common/eventdetails/eventdetails.component';
import { CctvComponent } from './common/cctv/cctv.component';
import {WifiComponent} from './common/wifi/wifi.component';
import {MessagesignboardComponent} from './common/messagesignboard/messagesignboard.component';
import {IntegratedtrafficComponent} from './common/integratedtraffic/integratedtraffic.component';
import {TendersComponent} from './common/tenders/tenders.component';
import {BloodbankComponent} from './common/bloodbank/bloodbank.component';
import {KeystatisticsComponent} from './common/keystatistics/keystatistics.component';
import { GeoLocationComponent } from './common/geo-location/geo-location.component';
import { DownloadComponent } from './common/download/download.component';
import { PrivatePubilcHospitalComponent } from './common/private-pubilc-hospital/private-pubilc-hospital.component';
import { GovernmentComponent } from './common/government/government/government.component';
import {RazalibraryComponent} from './common/razalibrary/razalibrary.component';
import {StatisticalreportComponent} from './common/statisticalreport/statisticalreport.component';
import {DistrictprofileComponent} from './common/districtprofile/districtprofile.component';
import { SearchComponent } from './search/search.component';
import { TermcondtionComponent } from './common/termcondtion/termcondtion.component';
import { PrivacypolicyComponent } from './common/privacypolicy/privacypolicy.component';
import {SitemapComponent} from './common/sitemap/sitemap.component';
import { DepartmentuserprofileComponent } from './user/departmentuserprofile/departmentuserprofile.component';
import { MnnErpComponent } from './common/mnn-erp/mnn-erp.component';
import { CopyrightPolicyComponent } from './common/copyright-policy/copyright-policy.component';
import { DisclaimerComponent } from './common/disclaimer/disclaimer.component';
import { HyperlinkPolicyComponent } from './common/hyperlink-policy/hyperlink-policy.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgxStarRatingModule } from 'ngx-star-rating';
import { Card3Component } from './card3/card3.component';
import { RoundtimberComponent } from './roundtimber/roundtimber.component';
import { ResearchComponent } from './common/research/research.component';
import { SawntimberComponent } from './sawntimber/sawntimber.component';
import { TenderComponent } from './tender/tender.component';

FullCalendarModule.registerPlugins([ 
    dayGridPlugin,
    interactionPlugin
  ]);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BodyComponent,
        AboutComponent,
        AqiComponent,
        EventsComponent,
        FamousPlaceComponent,
        FeedbackComponent,
        TouristPlaceComponent,
        LogInComponent,
        DeptLogInComponent,
        AuthComponent,
        RegistrationComponent,
        UpdatingComponent,
        GrivanceComponent,
        AuthenticationComponent,
        ProfileComponent,
        AreaBasedDevelopmentComponent,
        ContactUsComponent,
        KeyPersonelComponent,
        MissionAndVisionComponent,
        EhelplineComponent,
        EventsContentComponent,
        GoutamBudhaParkComponent,
        SaiTempleMdaComponent,
        ViewAllEventsComponent,
        CalendarComponent,
        HealthcontentComponent,
        CalenderdataComponent,
        EventlistComponent,
        EventdetailsComponent,
        CctvComponent,
        WifiComponent,
        MessagesignboardComponent,
        IntegratedtrafficComponent,
        TendersComponent,
        BloodbankComponent,
        KeystatisticsComponent,
        GeoLocationComponent,
        DownloadComponent,
        PrivatePubilcHospitalComponent,
        GovernmentComponent,
        RazalibraryComponent,
        StatisticalreportComponent,
        DistrictprofileComponent,
        SearchComponent,
        TermcondtionComponent,
        PrivacypolicyComponent,
        SitemapComponent,
        DepartmentuserprofileComponent,
        MnnErpComponent,
        CopyrightPolicyComponent,
        DisclaimerComponent,
        HyperlinkPolicyComponent,
        Card3Component,
        RoundtimberComponent,
        ResearchComponent,
        SawntimberComponent,
        TenderComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FullCalendarModule,
        NgApexchartsModule,
        NgxStarRatingModule 

    ],
    providers: [
        AuthGuard, 
        AuthService,
        { 
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptor, 
            multi: true 
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
