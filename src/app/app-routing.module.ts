import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './common/body/body.component';
import { AboutComponent } from './common/about/about.component';
import { EventsComponent } from './common/events/events.component';
import { FamousPlaceComponent } from './common/famous-place/famous-place.component';
import { TouristPlaceComponent } from './common/tourist-place/tourist-place.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { AqiComponent } from './common/aqi/aqi.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { UpdatingComponent } from './common/updating/updating.component';
import { ProfileComponent } from './user/profile/profile.component';
import { GrivanceComponent } from './user/grivance/grivance.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { AuthComponent } from './auth/auth/auth.component';
import { DeptLogInComponent } from './auth/dept-log-in/dept-log-in.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './common/contact-us/contact-us/contact-us.component';
import { MissionAndVisionComponent } from './common/mission-and-vision/mission-and-vision.component';
import { KeyPersonelComponent } from './common/key-personel/key-personel.component';
import { AreaBasedDevelopmentComponent } from './common/area-based-development/area-based-development.component';
import { EcourtComponent } from './common/ecourt/ecourt.component';
import { EpaymentComponent } from './common/epayment/epayment.component';
import { EhealthComponent } from './common/ehealth/ehealth.component';
import { TransportComponent } from './common/transport/transport.component';
import { EhelplineComponent } from './common/ehelpline/ehelpline.component';
import { EventsContentComponent } from './common/events-content/events-content.component';
import { GoutamBudhaParkComponent } from './common/goutam-budha-park/goutam-budha-park.component';
import { SaiTempleMdaComponent } from './common/sai-temple-mda/sai-temple-mda.component';
import { ViewAllEventsComponent } from './common/view-all-events/view-all-events.component';
import { PhotoGalleryComponent } from './common/photo-gallery/photo-gallery.component';
import { BoardOfDirectoryComponent } from './common/board-of-directory/board-of-directory.component';
import { EmergencyCallboxComponent } from './common/emergency-callbox/emergency-callbox.component';
import { MasterPlanComponent } from './common/master-plan/master-plan.component';
import { MessageFromCmdComponent } from './common/message-from-cmd/message-from-cmd.component';
import { NotificationComponent } from './common/notification/notification.component';
import { CulturalHistoryComponent } from './common/cultural-history/cultural-history.component';
import { VideoGalleryComponent } from './common/video-gallery/video-gallery.component';
import { CorporationComponent } from './common/corporation/corporation.component';
import { OrganogramComponent } from './common/organogram/organogram.component';
import { ShareholdingComponent } from './common/shareholding/shareholding.component';
import { CalendarComponent } from './common/calendar/calendar.component';
import { HealthcontentComponent } from './common/healthcontent/healthcontent.component';
import {CalenderdataComponent}  from './common/calenderdata/calenderdata.component'
import { EventlistComponent } from './common/eventlist/eventlist.component';
import { EventdetailsComponent } from './common/eventdetails/eventdetails.component';
import { CctvComponent } from './common/cctv/cctv.component';
import {WifiComponent} from './common/wifi/wifi.component';
import {MessagesignboardComponent} from './common/messagesignboard/messagesignboard.component';
import {IntegratedtrafficComponent} from './common/integratedtraffic/integratedtraffic.component';
import { TendersComponent } from './common/tenders/tenders.component';
import { BloodbankComponent } from './common/bloodbank/bloodbank.component';
import { PrivatePubilcHospitalComponent } from './common/private-pubilc-hospital/private-pubilc-hospital.component'
import { KeystatisticsComponent } from './common/keystatistics/keystatistics.component';
import { GeoLocationComponent } from './common/geo-location/geo-location.component';
import { DownloadComponent } from './common/download/download.component';
import { GovernmentComponent } from './common/government/government/government.component';
import { RazalibraryComponent } from './common/razalibrary/razalibrary.component';
import { StatisticalreportComponent } from './common/statisticalreport/statisticalreport.component';
import { DistrictprofileComponent } from './common/districtprofile/districtprofile.component';
import { SearchComponent } from './search/search.component';
import { PrivacypolicyComponent } from './common/privacypolicy/privacypolicy.component';
import { TermcondtionComponent } from './common/termcondtion/termcondtion.component';
import { SitemapComponent } from './common/sitemap/sitemap.component';
import { DepartmentuserprofileComponent } from './user/departmentuserprofile/departmentuserprofile.component';
import { MnnErpComponent } from './common/mnn-erp/mnn-erp.component';
import { CopyrightPolicyComponent } from './common/copyright-policy/copyright-policy.component';
import { DisclaimerComponent } from './common/disclaimer/disclaimer.component';
import { HyperlinkPolicyComponent } from './common/hyperlink-policy/hyperlink-policy.component';
import { RoundtimberComponent } from './roundtimber/roundtimber.component';
import { ResearchComponent } from './common/research/research.component';
import { SawntimberComponent } from './sawntimber/sawntimber.component';
import { TenderComponent } from './tender/tender.component';
import { TenderfileComponent } from './tenderfile/tenderfile.component';
import { ComplainComponent } from './complain/complain.component';
import { KenduleafComponent } from './common/kenduleaf/kenduleaf.component';
import { BambooComponent } from './common/bamboo/bamboo.component';
import { PlantationComponent } from './common/plantation/plantation.component';



const routes: Routes = [
    {
        path: '',
        component: BodyComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'events',
        component: EventsComponent,
    },
    {
        path: 'famousPlace',
        component: FamousPlaceComponent,
    },
    {
        path: 'touristPlace',
        component: TouristPlaceComponent,
    },
    {
        path: 'feedback',
        component: FeedbackComponent,
    },
    {
        path: 'aqi',
        component: AqiComponent,
    },
    {
        path: 'signIn',
        component: AuthComponent,
        // canActivate: [AuthGuard]
    },
    // {
    //     path: 'signInUser',
    //     component: LogInComponent,
    // },
    // {
    //     path: 'signInDept',
    //     component: DeptLogInComponent,
    // },
    {
        path: 'signUp',
        component: RegistrationComponent,
    },
    {
        path: 'update',
        component: UpdatingComponent,
    },
    {
        path: 'userProfile',
        component: ProfileComponent,
    },
    {
        path: 'complaint',
        component: GrivanceComponent,
    },
    {
        path: 'sendOtp',
        component: AuthenticationComponent,
    },
    {
        path: 'contactUs',
        component: ContactUsComponent,
    },
    {
        path: 'areaBasedDevelopment',
        component: AreaBasedDevelopmentComponent,
    },
    {
        path: 'key',
        component: KeyPersonelComponent,
    },
    {
        path: 'missionAndVision',
        component: MissionAndVisionComponent,
    },
    {
        path: 'e-court',
        component: EcourtComponent,
    },
    {
        path: 'e-payment',
        component: EpaymentComponent,
    },
    {
        path: 'e-health',
        component: EhealthComponent,
    },
    {
        path: 'transport',
        component: TransportComponent,
    },
    {
        path: 'e-helpline',
        component: EhelplineComponent,
    },
    {
        path: 'eventContent',
        component: EventsContentComponent,
    },
    {
        path: 'goutamBudhaPark',
        component: GoutamBudhaParkComponent,
    },
    {
        path: 'saiTemple',
        component: SaiTempleMdaComponent,
    },
    {   
        path: 'viewAllEvents',
        component: ViewAllEventsComponent,
    },
    {   
        path: 'photos',
        component: PhotoGalleryComponent,
    },
    {   
        path: 'videos',
        component: VideoGalleryComponent,
    },  
    {
        path: 'boardOfDir',
        component: BoardOfDirectoryComponent,
    },
    {   
        path: 'emergencyCallbox',
        component: EmergencyCallboxComponent,
    },
    {   
        path: 'masterPlan',
        component: MasterPlanComponent,
    },
    {   
        path: 'messageFromCmd',
        component: MessageFromCmdComponent,
    },
    {   
        path: 'notification',
        component: NotificationComponent,
    },
    {   
        path: 'culturalHistory',
        component: CulturalHistoryComponent,
    },
    {   
        path: 'corporation',
        component: CorporationComponent,
    },
    {   
        path: 'organogram',
        component: OrganogramComponent,
    },
    {   
        path: 'shareholding',
        component: ShareholdingComponent,
    },
    {   
        path: 'calendar',
        component: CalendarComponent,
    },
    {
        path: 'healthcontent',
        component :HealthcontentComponent
    },
     {
     path : 'calenderdata',
     component :CalenderdataComponent
    },
    {
     path : 'eventlist',
     component :EventlistComponent
    },
    {
     path : 'eventdetails',
     component :EventdetailsComponent
    },
    {
     path : 'cctv',
    component :CctvComponent
    },
    {
     path : 'wifi',
     component :WifiComponent
    },
    {
    path : 'messagesignboard',
    component :MessagesignboardComponent
    },
    {
    path : 'integratedtraffic',
    component :IntegratedtrafficComponent
    },
    {
        path:'tenders',
        component:TendersComponent
    },
    {
        path:'bloodbank',
        component:BloodbankComponent
    },
    {
        path:'hospital',
        component:PrivatePubilcHospitalComponent
    },
    {
        path:'keystatistics',
        component: KeystatisticsComponent
    },
    {
        path:'geo-location',
        component:GeoLocationComponent
    },
    {
        path:'download',
        component:DownloadComponent
    },
    {
        path:'government',
        component:GovernmentComponent
    },
    {
        path:'razalibrary',
        component:RazalibraryComponent
    },
    {
        path:'statisticalreport',
        component:StatisticalreportComponent
    },
    {
        path:'districtprofile',
        component:DistrictprofileComponent
    },
    {
        path:'search',
    component:SearchComponent
    },
    {
        path:'privacypolicy',
        component:PrivacypolicyComponent
    },
    {
        path:'termcondtion',
        component:TermcondtionComponent
    },
    {
        path:'sitemap',
        component:SitemapComponent
    },
    {
        path:'departmentuserprofile',
        component:DepartmentuserprofileComponent
    },
    {
        path:'mnn/erp',
        component:MnnErpComponent
    },
    {
        path:'copyright-policy',
        component:CopyrightPolicyComponent
    },
    {
        path:'disclaimer',
        component:DisclaimerComponent
    },
    {
        path:'hyperlink-policy',
        component:HyperlinkPolicyComponent
    },
    {
        path:'roundtimber',
        component:RoundtimberComponent
    },
    {
        path:'research',
        component:ResearchComponent
    },
    {
        path:'sawntimber',
        component:SawntimberComponent
    },
    {
        path:'tender',
        component:TenderComponent
    },
    {
        path:'tenderfile',
        component:TenderfileComponent
    },
    {
        path:'complain',
        component:ComplainComponent
    },
    {
        path:'kenduleaf',
        component:KenduleafComponent
    },
    {
        path:'bamboo',
        component:BambooComponent
    },
    {
        path:'plantation',
        component:PlantationComponent
    }




];
  
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
