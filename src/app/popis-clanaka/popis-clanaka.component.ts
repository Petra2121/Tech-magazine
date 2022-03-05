import { Component, OnInit } from '@angular/core';
import { Clanak } from '../clanak.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-popis-clanaka',
  templateUrl: './popis-clanaka.component.html',
  styleUrls: ['./popis-clanaka.component.css']
})



export class PopisClanakaComponent implements OnInit {
  aboutData: string;
  sub:any;
  naslov: string;
  username: boolean;

 Smartphones: Clanak[]= [
      new Clanak('How Do Samsung’s Galaxy S10 Lite and Note 10 Lite Compare to Its Flagship Androids?', 'David Murphy', 'As expected, Samsung is planning to launch budget-friendly versions of its flagship Galaxy S10 and Galaxy Note 10 smartphones. The “Lite” versions of these phones have no price or release date yet, but we already know quite a bit about their specs—and are sure to hear more as we head into CES next week. Until then, I’d hold off purchasing a big Samsung Android, because there’s a good chance that Samsung’s Lite versions could be an even better fit for you than the originals.', 'https://lifehacker.com/how-do-samsung-s-galaxy-s10-lite-and-note-10-lite-compa-1840790121'),
      new Clanak('Xiaomi Mi 9T/Redmi K20 are finally getting Android 10 in global markets', 'Muhammad Jarir Kanji', 'The Redmi K20 — also sold as the Xiaomi Mi 9T in global markets — is finally getting some Android 10 love (via GSMArena). While Xiaomi had previously released MIUI 11 for the phone, those builds were based on Android 9. This time around, though, the company has a new year gift in store for K20 owners, with a version of MIUI based on Googles latest and greatest.', 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/larger_wm_brw/public/article_images/2019/07/redmi-k20-pro-15.jpg?itok=V_8dSOR9'),
      new Clanak('These Old Phones Will Be Cut off From WhatsApp in 2020', 'Brendan Hesse', 'WhatsApp will soon drop support for older versions of iOS and Android, and Windows Phone entirely. According to some reports, this means that millions of users with older smartphones will lose access to the popular messaging app.', 'https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_1600/vqsztmk1jkhydrdkqzoh.jpg'),
      new Clanak('How to Get Apple Music Free for Six Months–Instead of the Usual Three', 'David Murphy', 'If Apple’s three-month free trial for new Apple Music subscribers hasn’t been enough to get you to abandon Spotify, how about a six-month trial. Thanks to a creative workaround, originally found by 9to5Mac, you can use a special Shazam promotion to double the length of a typical free trial for Apple Music. That’s plenty of time to make up your mind—or, at minimum, a quick way to save some cash. As long as you don’t mind rejiggering your playlists, there’s no reason why you can’t cancel your current streaming service and enjoy six months of Apples streaming on the house.', 'https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_1600/ztkjsiymhbfpffmtqbui.jpg')
];

  AI: Clanak[]= [
      new Clanak('This Text Adventure Game Feels Like a Lucid Dream', 'Beth Skwarecki', 'Artificial intelligence isn’t just for dystopian algorithms; it also makes for creative entertainment, like when this AI wrote beginning sentences for a bunch of nonexistent novels. Now, an AI stands ready to guide you through an old school text adventure game, a game that doesn’t exist until you start trying to play it.', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/gnsczwomgr3u74v5a2tr.jpg'),
      new Clanak('Quips is an AI to help ALS patients speak with their own voice', 'Igor Bonifacic', 'One of the most devastating outcomes of motor neuron disease (MND), more commonly known as ALS or Lou Gehrigs disease in the US, is that it eventually takes away the ability of those who have it to speak. But like it promises to do in a lot of other areas, artificial intelligence could soon help MND patients better cope with their condition thanks to a new tool developed by Rolls-Royce and its R² Data Labs.', 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2019-11%252F22c1d3e0-11f1-11ea-bbff-f68290bbb602%26client%3Da1acac3e1b3290917d92%26signature%3Dd4f249c8da818f0c4abbb8b26ea4f4efc828c5ff&client=amp-blogside-v2&signature=33ad5f26dac93cc77e0c9f1520e9f0cbc21397d6'),
      new Clanak('Honda will show off its in-car AI assistant at CES', 'Igor Bonifacic', 'At CES 2020, Honda says it will finally show off its long-promised in-car personal assistant. The automaker has been working on its own digital helper since 2018 when it announced a partnership with SoundHound. Aside from the usual claims of "unprecedented" speed and accuracy, the company doesnt say too much about how the tool compares to AI like Google Assistant and Siri. It does note youll be able to wake it by saying "OK Honda," and that itll be able to infer context about a question based on your current location, as well as any previous queries.', 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-10%252F98390a20-f1f4-11e9-bf57-c49d2254d5e3%26client%3Da1acac3e1b3290917d92%26signature%3D14bcfae9a3a78313e839aae39c7ccf1f96aceb19&client=amp-blogside-v2&signature=2d5bcc63ce3db9410273b52db5f0fb0e7b307fe6'),
      new Clanak('Samsung made a rolling robot called Ballie that runs your smart home', 'Kris Holt', 'Samsungs CES keynote got off to an intriguing start when HS Kim was joined onstage by a robot designed to help you around the home. The company says it made Ballie to understand and support your needs: Essentially, it can run your smart home for you.', 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1066%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1066%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2020-01%252F1d308de0-30fa-11ea-b6ff-6ba3d82e22c3%26client%3Da1acac3e1b3290917d92%26signature%3Dee2b2c7a52980578db580d7ffdc5ca507aaee29e&client=amp-blogside-v2&signature=7e62c04219ba2c6eee7e9760895ad81c60101094')
  ];

  VR: Clanak[]= [
      new Clanak('Build (and destroy) your own levels in ‘Angry Birds VR’', 'Marc DeAngelis', 'Angry Birds fans can get creative with their pig-destroying shenanigans, as Angry Birds VR: Isle of Pigs just received an update that adds a stage editor to the game. This is the first-ever level builder for the series, according to developer Resolution Games. Players can place blocks, planks of wood, explosives and pigs in an environment, setting up challenging structural puzzles or cathartic domino-effect demolitions.', 'https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fmedia.zenfs.com%252Fen%252Fengadget_uk_662%252Fc95e1ecb5ef4bf1ce2cbc32dff7d9ce2%26client%3Da1acac3e1b3290917d92%26signature%3Dc38a948f0466d1d6b2eed4d765c966e530c0ddc4&client=amp-blogside-v2&signature=884fd84895171d6124cfb548b60738257d1471c1'),
      new Clanak('Panasonics compact VR glasses see the future in HDR', 'Richard Lawler', '2020 will be a key year for the future of virtual reality, and if things really take off then we should see a lot more stylish headsets like these goggles from Panasonic. The company says that these are the first VR glasses to support HDR video, and in some of the demo reels I saw the advantages were apparent. One video showed high-res video of a beach captured from a drone, and in HDR a lot of annoying gradation in the sky disappeared and overall quality improved.', 'https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-01%2F95284d20-332e-11ea-bfe2-f57e801e64b7&client=a1acac3e1b3290917d92&signature=0aa516567364ce26e134e3f5a62fa489e1acd9d5'),
      new Clanak('Firefox makes it easier to send links between VR and desktop', 'Rachel England', 'Firefox is making it a little easier to bounce between VR and real life. In a new update for Reality, Firefox has introduced the ability to send videos and tabs straight to your VR headset from your phone or desktop, and vice versa -- youll be able to send tabs straight to your phone or desktop to access as soon as you take your headset off.', 'https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1128%252C647%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C918%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-12%252F7a0260e0-1cc6-11ea-aaf7-3c00af5dbf95%26client%3Da1acac3e1b3290917d92%26signature%3D75d9d0f79ab8f481dc9af1665a0ed7fd7cf69d19&client=amp-blogside-v2&signature=f4277ebe10f24e916c4b0955f603db3924654b2c'),
      new Clanak('Teslasuit’s new VR gloves let you feel virtual objects and track your pulse', 'Adi Robertson', 'Teslasuit — known for its full-body haptic feedback suit — is introducing a glove that can let users feel virtual textures and gather biometric data. The device is called simply the “Teslasuit Glove,” and it will debut at CES in January, with the goal of shipping by the second half of 2020.', 'https://cdn.vox-cdn.com/thumbor/Pdz4aR0Waj8NcG9_Akq8d_8R3bo=/0x0:2588x1355/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19554804/TESLASUIT_GLOVE_1.jpg')
];

  Software: Clanak[]= [
      new Clanak('Declutter Your Menu Bar With This Mac App', 'Brendan Hesse', 'As you install more and more software on your Mac, your menu bar might start to get cluttered with extraneous icons. This not only looks messy, but it can make it a bit of a chore to access settings for your various apps.', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/wd2ckaezqastllugfzik.jpg'),
      new Clanak('Update WhatsApp To Block a Bug From Erasing Your Group Chats', 'Brendan Hesse', 'A major WhatsApp bug has been discovered that leaves your chat history at risk of being permanently deleted by others, and you should update the app as soon as possible to patch out the vulnerability.', 'https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_800/nbgq4742xyazo6fnv9m3.jpg'),
      new Clanak('Iloveyou and the 24 Other Worst Passwords of 2019', 'Nick Douglas', 'Don’t use bad passwords. Not even for stupid stuff. Because the dumb social network you join today might add a wallet or a cloud service or a camera some day, and before you know it, the only thing stopping someone from draining your bank account and spying on your home is the word “dragon.”', 'https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_1600/l86jhsdwivxk8jcejl9n.jpg'),
      new Clanak('How to Fix Your Familys Tech Problems Without Going Crazy', 'David Murphy', 'I don’t mind helping out friends, loved ones, and extended family members when some device or service goes wrong, but it can be tricky when they don’t quite understand how to describe the problem—or even the things they’ve done to fix it. Having found myself in this position quite a few times, I’ve come up with a few general troubleshooting techniques that you can use to (hopefully) address most problems your family members bug you about.', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/qqcjct2z7juyphwpvgzg.jpg')
];
 

  a: string = "BLABLA";
  Clanak(a) {
    console.log(a);
    this._router.navigate(['/popis-clanaka/clanak'], { queryParams: 
      { aboutData: JSON.stringify(a) }} ); }


  constructor (private route: ActivatedRoute, public _router: Router)  {
    this.sub = this.route.queryParams.subscribe(params => {
      this.aboutData = params.aboutData;
      console.log(this.aboutData); // smartphones
     });


  /*
    console.log(this.username);
    if (this.aboutData === 'smartphones1' || this.aboutData ==='AI1' || this.aboutData === 'VR1' || this.aboutData === 'software1')
      this.username = true;
    else
      this.username = false;
    console.log(this.username);*/
  }

  ngOnInit() {
    
  }

  Prijava () {
    var ime = prompt("Upiši korisničko ime: ", "mihaelawang");
    var lozinka = prompt("Upiši lozinku: ", "mojalozinka12345");

    if (ime === 'petralovric' || ime === 'mihaelawang')
      {
        this.username = true; 
      }

  }

Odjava () {
  this.username = false;
}
}
