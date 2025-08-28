'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bba3eba950d848c36eccdfe936ab08a7",
".git/config": "f70244f5f3095416a1a30c07262446c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "01e0306fecf28b3676f7b1c185b679bb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "72f99b8bdc5d81f3fd5b4473d52f1d3a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f63c5b9ded6e741869c0392a1b48c9e",
".git/logs/refs/heads/main": "61c20120144c2491e73eaa54e06a727b",
".git/logs/refs/remotes/origin/HEAD": "affb031f6175dc2c812a950fc12d0cd2",
".git/logs/refs/remotes/origin/main": "1cd499fc0439f732549d6e78ef4f75e1",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "9a7fa59443b8925d7b787ea6939b9d2f",
".git/objects/02/a2946d5c29600675e353212a21d4092fa4a793": "3dded44c716ffd56acc37197fbce7544",
".git/objects/03/46c44a4ef6ca3b43fb1190885f88d67a1ac209": "12cb212c48080e22e901f6186adb25b6",
".git/objects/05/5be6df05fbc515fd673b073b061942ee055c98": "53f653a2f9929e534e24f231868bf4ab",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/12/04987eb9f219262a88bf18e00f64d96f983732": "3c191cbda9426185db1de2b49b016ec2",
".git/objects/14/7e51fe4d7b92e0d3bee022139e740ae73d35a2": "7ff5ca48fb7f8ed32be476cf3dcdb1f6",
".git/objects/15/8fd897a9e7b83295cbf3170967e45c59be5917": "6ee51350e35bb5d31f48c72438bb99a2",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "3ec681bd76761614c211bd24c8cc4cee",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "99f80d4c240a77ee916c880b7fc4f03d",
".git/objects/29/f12e06f040a53d72e497accba07fa935c523ef": "753b6eebd6f960a70da52ca6444dfbd2",
".git/objects/2b/5118b8af5491985487c8732dc0a0ec2d7986bd": "ae536e16543cc19054ced6aa730f345c",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/33/8ca9645578e84a17f2d015ed05dc4f8b1ed3b1": "0e7b75f2c0133e3da349c283f9d7a5b3",
".git/objects/39/208adec32cfb038d202a22a66d34efa815e3cc": "01ade96a154b0ef6e86f42e0220403b2",
".git/objects/3d/2f291120a88a261ecf7fceed649dcd510a1305": "43aa2bf8f4231c7c77035a5cae0d7065",
".git/objects/3d/5c46ba5036509733b363b74ffb36035c8802ff": "f2223ee701c919ceb1ea6635b54c1e29",
".git/objects/42/d9ef9b03ccb959beee567d5b9f5c497ed830de": "c608e93c0259b9e181b4bd20a8a12ecd",
".git/objects/49/e875e9523d33dbf93644987ad55909916d9649": "96e75dd6979b7cc106b84d2aa0cf3695",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "b1f4803b23aff24fe4dfc22efcea9738",
".git/objects/4b/c005679517be0e610b7307d698c4456ac2093b": "2cea33a4ca19eb51933156dfc2a9c34f",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/0d9f8efb86f69fce020088c7bb426809057e80": "f37c92205b1ebd3f3903b5632beaf235",
".git/objects/51/06ab88ec0ea1a8d733842f87182d9bcc3afcde": "e70635f62344204dbcbb7cd0988e7bfe",
".git/objects/51/08737cd2efd1cd7b09a791163661d20961d16e": "f3d65dc908e63197e894d73b91d2a2fd",
".git/objects/51/e1a64a5ccf272b728b8f12dbf31e9766847a2f": "926c4277aee57d7e7721a6a9fe5e389d",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/56/94f64cd2414539cd48d52b4214023c06d9bd6c": "3ad120cd7783a1ca104f68eeb629974e",
".git/objects/5a/a853a151d3c02e5b499b5eaee86e1bab136dc7": "ba131084bafbdfe45eb936f383c69a12",
".git/objects/5a/ec1e5c6fff0c10dffcb4177eaba5b3684fd0ed": "6780b9f4dd168ab9b7776b4c89d977a2",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "bb77138b3a7314f7a73f388f2a84d9ad",
".git/objects/5e/e8de390944f1e77ef2ad68800d8179ce946e4e": "30d5a41c3543cdf4eff8ff2118b72e3c",
".git/objects/5f/10d15761cd2f4ffb258d910845f159c4cc459f": "c97a4d11fa5cdada31f1055649a64ab8",
".git/objects/62/16dda9381d3f889f3655077d8b58cb1cd9efc6": "1f7a4be2b87d5127c33ad8a439296a8d",
".git/objects/68/91709d3c783347152242cf8e43e60b1f50fd74": "327eb66391238b5923a4b1e47df52fbc",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/70/2fbb6eb2e6170f9dfe350cae530a0c13ee3b26": "a63b9b81e1b8835dff3dc5a4b7d0a058",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/c13622a4ac76fffdf99b6f6fa2ee18f78d17bc": "a99a2c3b704dc0d5e4ddd7925fec0515",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/ce954d82db3eaa3333fb0cb2ace56a38a1d59e": "a960c8644eeba50c7df28f062b886479",
".git/objects/7a/d9ab9231579631f08bb618de5f3eb9e12ea974": "a8476221227ea8c71ee556c0410aacf7",
".git/objects/7b/4896140c2c5a366c60fd1c0200c7e4c3bcc23d": "639c40c7b2b9e954ed940a431d39a214",
".git/objects/7c/c68c1e89d1ef80d50efcd726c2abfcc0291609": "2d984a736ed57688bfb78530617e94ad",
".git/objects/7e/dfc2e8ef96f27a0fe6d3b26f4a301cac306213": "80f44bf11fb0519a85fd2fdbf0c05cf0",
".git/objects/83/1db63dd49c1673502d48f7c20ccb82267c75d1": "6ad19f45efd22490fe2b4c6867b54f52",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d11997844835b56a07521bbe9925a96b57592d": "74a112c36f51847a07f6f518e3115138",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/10c4624d3a19ef382cad90c20cc064c2355167": "d600530a61c8b093fde66b4ab330e417",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/735bf3f4c1a91ef269696cdfa132628c9826b5": "803d7f465f2939ea43098d3d8342cf54",
".git/objects/91/a0afcd41f41e9551b9703dc6c70b151dbd8d2d": "19f465da114396b0e4a26cd6adef386e",
".git/objects/91/d29c196082e7b741dfac43941953c1847352a6": "982f7320e679bb353a9b939a79f54670",
".git/objects/96/97a390894c7cfd7badbb1dffea3890ef4f4e58": "0a801ef70ca33bc89290433791971407",
".git/objects/99/aaf59adc4673ee2fd99d81b5a8c41c5c887102": "a6d256370be2042dd71d55e50acbed8d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/a15ace9f16b9e743693b6c2cd94616a11c45cd": "66364641f6b1a4bc39f6543559df6e73",
".git/objects/a2/f70853a8376486cfcb7df66fd703c07d00cc3e": "dd58beff8bbc55aae5f57858a4b17c0c",
".git/objects/a6/ca89b2b8efdee7da1f0cde9bc3b371bdbaff43": "53de8dfa26c045c972081e2a841aa506",
".git/objects/b3/f6a10899111a29e7baecfde3cdd49643c23898": "301eb39f8d34c128beee2e5bcf63cf4e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/11e24f90cf93c7a878c76c2593bdb528a76795": "029a2966a166b74a9b2a46d459f302a3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/abec4724b84d4fc6a4fdb11d1235d46f14f88b": "e9eb13106bd997c2ad6391479605d5b8",
".git/objects/bd/f1e32f7eb1157fc600bc0688a8a92410ab17be": "9dfa162e3e06dcb55cd420ed9ee3e3fa",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/c0/753f2d504a49684c0ab9c903a805b877087b0b": "7b86e2c472be38b0d97caf1976cad114",
".git/objects/c0/e8dd84a5b32dafc91bf453460bb69115c260fa": "a65c4661104609a56e1257155b731b9e",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/4ab62f911ca05a1393c2dc55251b25ca53ecf2": "ac151cc1d0d1695c34834ffcfc79b3b1",
".git/objects/ca/8edb9bc4c3d81d2d4e4a7c31cb51907544716f": "19873ff7a0d7efe073ca8560181f4834",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/e86b040661bbf1135840c3072f5fc2a8c4ac45": "f01722f7e37eca17d97c8bd5ee0fe757",
".git/objects/cc/4ca6996fb1677190ebd153fa628a37e5a9d2f1": "33a95c2ccea2d1dfe87cf47ebebf255c",
".git/objects/cf/65daceb01d729d5e32e3e662c07f18b58fd675": "2db8aeea697dadb9711ecdd0e3fafe15",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/d3517bab41ecb76d0ffabf7a7da0dde6cf3748": "1e8f7dd29a003349a51852ce909b590f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/95e2ba7a2aeabcd14c597b3a7f8c1febb81b8a": "d457bad1940fe23179874e9ef6ac11dd",
".git/objects/e5/4a99c1bc96d1ebb6b2bb1b69bab4285642f434": "6a02e5b8fa4dc198ad261c7aa80c1062",
".git/objects/e5/c73549e99ea9f6232b63e94c190a45c0e67f5f": "28f16cc71889aa897123fdcdbbfd3dfc",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/e6/940e515b91c4af4f9e2a5c064d194ffa6ca1df": "c8c99b39383482fc38432b16173aa7af",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/8de300ebd842cf6610b531f2fdaec5461c43e1": "e129ad4f3570193c01c30574efa9faac",
".git/objects/ec/b524667864b6254c2ec3ead98eb0110ecd1bc8": "ce20552f65898070dca9f027fef52e69",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f5/1449f16b27d4f6e93033b56564ac5fc21cd8d1": "9c4b3906d78d2843bb127be6ffc4caad",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/d845b922c7e11e885325b06a63c75bbd817b6d": "0b585c0a043f0bde4a69864bfce06dce",
".git/objects/fd/5cba7d06cab022d92084f587bb3c377c9a8046": "874dab295f185610d0985eba8a4b9838",
".git/objects/fe/6b7a5c864ef236544935ba82370564976c177a": "601d6a2bdc010b622584eaac84a2dfb1",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/refs/heads/main": "b9b2dbc74749d9fb32cbc895164c0b2a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b9b2dbc74749d9fb32cbc895164c0b2a",
"assets/AssetManifest.bin": "fdfd3c0eae05adf7f21ac4e2ab15c674",
"assets/AssetManifest.bin.json": "be78c6c14e6c2303ef5132c52143496d",
"assets/AssetManifest.json": "261c68497d6150c6b237059bbe99094e",
"assets/assets/icons/adventure-game.png": "a43d5f3a87926cabef000e6451de4be6",
"assets/assets/icons/architecture-and-city.png": "cf4b1e6664c701b308473919ea124454",
"assets/assets/icons/bible%2520(1).png": "99d165694ad83e5dfb7af3b95aa1a09e",
"assets/assets/icons/bus-stop.png": "5509ab4da0a9241027d210c75ab1f592",
"assets/assets/icons/bus.png": "27aeb2f4402c3f2152adc4886617f5d0",
"assets/assets/icons/christmas-dinner.png": "1fdb234cdefedeff04fb83c733a00633",
"assets/assets/icons/church.png": "30a07223e50222a6c3ad033e6b7aa902",
"assets/assets/icons/combined%25203.png": "824a9c291b34bbe5d1ba0e44446145c6",
"assets/assets/icons/combined2.png": "198b2653eab8a646f07b1dfe97289832",
"assets/assets/icons/cutlery.png": "af40fb7940d5cf13bbb8cc0769deb01f",
"assets/assets/icons/dancing.png": "9686bb687acedd643019337eef2792e7",
"assets/assets/icons/dina.png": "59dd4150c37ae75defbfd6bcff93b7cc",
"assets/assets/icons/english-breakfast.png": "529f6e99227d39471a414bf48e64bbf8",
"assets/assets/icons/food.png": "7920fffbc1f8294ef647846e9ed35357",
"assets/assets/icons/get-up.png": "4fac66168abe936f359df7e71f598494",
"assets/assets/icons/hand-over.png": "56b5e71c07171b872d7beb0a5539a4c4",
"assets/assets/icons/hotel.png": "b8e9e1d9558517c031e72ff6117c9be6",
"assets/assets/icons/house.png": "6d44fb8a04b253437bbf236d54dd76d5",
"assets/assets/icons/loneliness.png": "200beecf66f345d3218bbcf8c571ffe3",
"assets/assets/icons/meet.png": "b8147d974499a8fb1755dbdacc2a7e33",
"assets/assets/icons/minorite-monastery.png": "2faeebdce42fc8bec529b07389e7c73e",
"assets/assets/icons/opening-ceremony.png": "56cee980c64586397a06de5f2828c209",
"assets/assets/icons/pray.png": "15a700bed9dd52bafb7d0091fea293df",
"assets/assets/icons/religion.png": "1534b2d61d08771b9290a97941cb8378",
"assets/assets/icons/route.png": "c61b7a6a0fa45ecebdf9dc63624961e3",
"assets/assets/icons/shoot.png": "a8c31a0c1c65ad34d409efaafc190388",
"assets/assets/icons/sleep.png": "ac0aeaf6e68de98cfccc1bf2717818e5",
"assets/assets/icons/swimming_pool.png": "ecb936a0f273eba708a786018ca3d712",
"assets/assets/icons/workshop.png": "e21d6ce32afc0b8aa8a1906be399fe0a",
"assets/assets/images/background2.png": "581898862a02fb44c083f6626aced196",
"assets/assets/images/bg.jpg": "05fdb5d8c513afcd7c8e7772bb5c35f9",
"assets/assets/images/bg3.png": "0a14caa69cf65fc17e2c2b533183c232",
"assets/assets/images/bible.png": "640bc2d93c92cdbbbe092134187b4777",
"assets/assets/images/brand%2520not%2520trend%2520logo.png": "8517ea637f2349a9486295151bfd4a37",
"assets/assets/images/logo_no_bg.png": "0ee0ef56c39114524fa9ac7b82ccbc93",
"assets/assets/images/prayer.png": "ea2f09430857f4317e8b2314c626b0c4",
"assets/assets/images/schedule.png": "8461ccb9a7c19150183fe3cc59958960",
"assets/assets/images/she3ar.png": "7635999d65f4aa31ffabeeb47f4f64af",
"assets/assets/images/teams.png": "924fb1e873c6157b59293e8f99b7e424",
"assets/assets/khelwa.pdf": "4066302a1307693e70065cf7cfd14813",
"assets/FontManifest.json": "8a34b3543de14a32a228de255a904ab7",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/TufuliArabicDEMO-Bold.otf": "65930b1a148ea96f04590d17bf6dd481",
"assets/NOTICES": "25ac124f913baf30c17de8255143b8bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "8da8fc71b54df02f6a7c2f131d56a3fe",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9cca1b7020cea21fdccc114f27ebf652",
"/": "9cca1b7020cea21fdccc114f27ebf652",
"main.dart.js": "fed1822114fa958db94223ae20b44ef2",
"manifest.json": "7172a5ed17eaf4c88be951ca69ed5ed1",
"version.json": "2c1bcd3370c445f412cc3c1aef3b836f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
