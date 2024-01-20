import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre
  const { deploy } = deployments
  const { deployer, owner } = await getNamedAccounts()

  const publicResolver = await ethers.getContract('PublicResolver')
  const dnsRegistrar = await ethers.getContract('DNSRegistrar')

  const tx = await publicResolver.setApprovalForAll(dnsRegistrar.address, true)
  await tx.wait(2)
  // const error = dnsRegistrar.interface.parseError('0xf1613c4c');
  // console.log('error', error);
  // const inputs = dnsRegistrar.interface.decodeFunctionData('proveAndClaimWithResolver', '0x224199c200000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000bc0000000000000000000000000231b0ee14048e9dccd1d247744d114a4eb5e8e6300000000000000000000000073ea0545b6d7cf1297eba25ac67ddb7efd1867f4000000000000000000000000000000000000000000000000000000000000000f0570756c736507646f6d61696e73000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000280000000000000000000000000000000000000000000000000000000000000068000000000000000000000000000000000000000000000000000000000000007e00000000000000000000000000000000000000000000000000000000000000980000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000004a002b08010001518065b730d065a5ff4078b70007646f6d61696e7300002b000100015180002499ee080274ace87d5605021df3e619563249119e01d0975f30455df1bcfb3df54329f17b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001007631db30c59690a301ddee88fd0aa9d445b9b5ab5c7e32cb02f3dcb22f817fbadbf5d165de21710b9df1820e0cfa3b1026dbc20a45b64aadd1eee16ce7b37e11b8f9f1f2015feb4452c0198903bfd9f241d4452723249bc2dd399035272d062399aad86781afd66a802dafd93dc370ee263a7c97b34f75065fc5449ca616b970d5f9ac51443654212726014d97287305022545200a30e487472d04c07d3c6ac8ad68554ddf22da419dda7e5743bedee981b66410f84a6b40d3034fb8b25b2ebd578d7e39f07cd9db02e7bc22e49b8ec26a2004f86a69b9b158840fcb8703a1c829dce6fa066d183d6c0143e589b4893cd862483eab3fbc8c1eacc8b17dfdc530000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002e0000000000000000000000000000000000000000000000000000000000000026c0030080100000e1065bbbac1659ffd3199ee07646f6d61696e730007646f6d61696e73000030000100000e1000880100030803010001c2523443a45e2fdd12ba60b7e1231fb5fbb211312287bb1f15928a273a19439f55ce38cdadc4ca209dfa18965cc9a9411cf85823ba6d954a10abf74d0a8a24f452968014f3f55ae63faf3e46d3c460ccff1ed4bd395424b3514c9e0d938cc950219e6f8909cdfa44307a7322ef52a4a77fca129e9ee2391bf27a894d9607e41707646f6d61696e73000030000100000e1000880100030803010001c3298356ce01a95de2190cda895362db03fd8d7ac1aabe303826ffbaf68a4ae2008ed2e449f976273b66677097a6a1988a45dd9d387502182adf8d0542a833bdd9d45ba9ae42e9657c21cb495a764a8dff7f02679ee3f6228a35d5872febef696626b6a30499aceaa21ca5aa23cbd13a3e5acce6ad9d63e53b000a5466d2612107646f6d61696e73000030000100000e10010801010308030100019b8afc284627031fe380b8b7ac3e59f8ba952405c6c7af62c5cafd85acf950353eeaa7ea845b85af3912eb6a618b9f835866644fe217516fddaaf5a40ea76664602032d4ae83ff846c4b46940b6bfc5e54f5dd683bfaeb60a8a8572a15e0b94b5dceee08b1974ce9d2e1ecfd191afd5ba56eb2622233b97b85bcb01def82d38fcddbdb6d2075473cc5a44e9dfe9e183dac43e72374cd625df2d8a0fd547760175cf3f73ead153f57c34cfecaa0ada67e899b4a673768983e0e71fcfbd67e190e9ab1f57cad6ae0d478575c85657f9197fb71a4f9fef8847be3ab216416f0818a7fde3e7a2757405679e9d35460204b605d01b1d0a4e82fe61fb3e2bb79b937c300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100063875f60235d4fb32936773bb44f2bee0036362b6a3e3974acb394670f96aed0f323e1337d77931202bb743e6b323ea142621bdef105cffeb6fb1702a0ddbdb8bd8814a2139ed33dfe536abdddfc529305c83ca377387162736ebbd671a4f1aaa10ecff762ddb90fae9c06dadbcf991d6251dd8f91c6921605af5c363745a60ca74a1402f0c986c315903ad9886b7b633610700468341a4ffd185e03e276cffffed6dfcc09554d90a12337b5ca4e6bb8fe4e05ad084d7f5847c10cb6c6a6d9de295dce0c31165df3ad7ca77e45c5df8c51652c0d9f88d3b7cdcc4d61ca229ca7505b0b1e84c1f5fde21270a64cde02611a1ed765636b25b43723d001d93fa69000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000058002b080200000e1065bbbac1659ffd316fcf07646f6d61696e73000570756c736507646f6d61696e7300002b000100000e10002409430d02ea3f78866a9690e321c08b39a573684222dea9db0d601553f6fea7b3929ca9a600000000000000000000000000000000000000000000000000000000000000000000000000000080b41f0881566ba3908e14ba7668245b9c47ee9c4038b8079647bc099674170da9507f792009b5e12c13b0e0f5788728a3467429bcefd89025ec7d250857412b11017e16d341b1f70731f88df102db82032c02a0698f10d93eaf2048b05bc667b5b9716c9aca484c617626dc86e997db98140f855cb02d9167f404a038a3eb6acf0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000db00300d0200000e1065f2cf7c65a263fc09430570756c736507646f6d61696e73000570756c736507646f6d61696e73000030000100000e1000440100030da09311112cf9138818cd2feae970ebbd4d6a30f6088c25b325a39abbc5cd1197aa098283e5aaf421177c2aa5d714992a9957d1bcc18f98cd71f1f1806b65e1480570756c736507646f6d61696e73000030000100000e1000440101030d99db2cc14cabdc33d6d77da63a2f15f71112584f234e8d1dc428e39e8a4a97e1aa271a555dc90701e17e2a4c4b6f120b7c32d44f4ac02bd894cf2d4be7778a1900000000000000000000000000000000000000000000000000000000000000000000000040e40d8839edcb0f6fa0e1c9b9357d6e0d2f75e926ea936e58199bc4d2ebf8316a652c58e34d21c964348451902deb5a23fc6c75d795c4610cb2479f47ad82fb49000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000006c00100d030000012c65a80e0365a54ee386c90570756c736507646f6d61696e7300045f656e730570756c736507646f6d61696e7300001000010000012c002d2c613d30783733456130353435623664374366313239374542613235416336376444423765666431383637463400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040115bc074d1ef9c92bcc56e52c2c89c55daf1237bddf93e58b98f96565205f2b3f24b83b269f53098f5f447d256eaa8ab8f9dae29a607b5c039bbed7bd8f3472a000000000000000000000000000000000000000000000000000000000000022600003000010002a30001080100030803010001e9ed09c2049dd2e1d9048afa91c5abf3e4282c22a31b7be5deea34e52e4cf328d0572d7bf35bc033dba1cbdb67f78d6f9455ff141d6a968901243fa032ecab30f41f5f8990736eb8a73624bb69331838825484e029d15d3d829c54d6e48c0e4442fecdea991f2ebc397cb99e05b92802db7af458460feadaa15ecd1b42490d249e6c8fc2016c8215582cac22d75ea8c70114e7267a5bb9e958cc6de59f90b3c7623cd5ab4b96972e026dad6506208b857ee6705d8ce21913ffcf7a3511f328f73654d7d28ba299282d75fb2ecfdd8825dd4847495d3b4503cc34fce290be2b8979b7cab1ca049424ecc2e915675557e606da144a36c5684727d528eb7c18693900003000010002a30001080101030803010001acffb409bcc939f831f7a1e5ec88f7a59255ec53040be432027390a4ce896d6f9086f3c5e177fbfe118163aaec7af1462c47945944c4e2c026be5e98bbcded25978272e1e3e079c5094d573f0e83c92f02b32d3513b1550b826929c80dd0f92cac966d17769fd5867b647c3f38029abdc48152eb8f207159ecc5d232c7c1537c79f4b7ac28ff11682f21681bf6d6aba555032bf6f9f036beb2aaa5b3778d6eebfba6bf9ea191be4ab0caea759e2f773a1f9029c73ecb8d5735b9321db085f1b8e2d8038fe2941992548cee0d67dd4547e11dd63af9c9fc1c5466fb684cf009d7197c2cf79e792ab501e6a8a1ca519af2cb9b5f6367e94c0d47502451357be1b50000000000000000000000000000000000000000000000000000')
  // console.log('inputs', inputs);
  // const tx = await dnsRegistrar.proveAndClaimWithResolver(
  //   '0x0570756c736507646f6d61696e7300',
  //   [{"rrset":"0x003008000002a30065badf00659f2f804f660000003000010002a30001080100030803010001e9ed09c2049dd2e1d9048afa91c5abf3e4282c22a31b7be5deea34e52e4cf328d0572d7bf35bc033dba1cbdb67f78d6f9455ff141d6a968901243fa032ecab30f41f5f8990736eb8a73624bb69331838825484e029d15d3d829c54d6e48c0e4442fecdea991f2ebc397cb99e05b92802db7af458460feadaa15ecd1b42490d249e6c8fc2016c8215582cac22d75ea8c70114e7267a5bb9e958cc6de59f90b3c7623cd5ab4b96972e026dad6506208b857ee6705d8ce21913ffcf7a3511f328f73654d7d28ba299282d75fb2ecfdd8825dd4847495d3b4503cc34fce290be2b8979b7cab1ca049424ecc2e915675557e606da144a36c5684727d528eb7c18693900003000010002a30001080101030803010001acffb409bcc939f831f7a1e5ec88f7a59255ec53040be432027390a4ce896d6f9086f3c5e177fbfe118163aaec7af1462c47945944c4e2c026be5e98bbcded25978272e1e3e079c5094d573f0e83c92f02b32d3513b1550b826929c80dd0f92cac966d17769fd5867b647c3f38029abdc48152eb8f207159ecc5d232c7c1537c79f4b7ac28ff11682f21681bf6d6aba555032bf6f9f036beb2aaa5b3778d6eebfba6bf9ea191be4ab0caea759e2f773a1f9029c73ecb8d5735b9321db085f1b8e2d8038fe2941992548cee0d67dd4547e11dd63af9c9fc1c5466fb684cf009d7197c2cf79e792ab501e6a8a1ca519af2cb9b5f6367e94c0d47502451357be1b5","sig":"0x1028410868c4b93917d2dceecb93bab829b8570770a6944bfab607bc76ed843d5909c4e5ab544a946086c6442121892b9b881da0ad1287a4eef492c2423bb7dcf89e2666764bfe6d0f283dd2a9de35732ded3535b1f218108647982ef4f3a22a4699fcdd8d20b763ce1890448117cab50594094a427c730ac8cf733f0d795946ae22bcaad2a31bfbeff20668aeda199b761b77f73d3e2e65d934de76ec6412f9f2696083bc2b19a27419314e90d1b143aa39e0fbe63f8eb513ebc6cdb88e0d2dfdf9397beb85732e626422e7fce46e2d6130681d33ec25a78110876e78c3d45281f5b25075f5e62f491ae3536f470bc84239e4fd3f42a1fc6a3ea90fb53905a9"},{"rrset":"0x002b08010001518065b48dd065a35c4078b70007646f6d61696e7300002b000100015180002499ee080274ace87d5605021df3e619563249119e01d0975f30455df1bcfb3df54329f17b","sig":"0x1f22768f99eba05969eb2a002cef83f253458dfd9161b7fb1a58ecaba3e36c7a9f044aeceea1857f6458f0c8cd2775fca588aa1f2b29dde60e0742a0c655bb6381c4d64eb9a14070af2a321a044a22a888d67c96068d23c1ace41a9f25fd8508ce5d43a9abdce70dc3449daa5f8eb6bec8a1b8dac7c3055fcd49faa9a191e3931d943e67cb3382f7d376b1d5bce69fa41f77d0e775b4b47e69a2735ccd5f55a3776a470d5dd702a88ae8adb6b6caf724c4179af0d072f5741362bafb114216b4d8c64c537d2bd03b006aadd593424702d520a6991f732c28bb0d1fde3a28be8728a1035fb66bdc3103c5c42730b7695b74b2a7cc0fa6ebe00ac2d934e971f2ba"},{"rrset":"0x0030080100000e1065bbbac1659ffd3199ee07646f6d61696e730007646f6d61696e73000030000100000e1000880100030803010001c2523443a45e2fdd12ba60b7e1231fb5fbb211312287bb1f15928a273a19439f55ce38cdadc4ca209dfa18965cc9a9411cf85823ba6d954a10abf74d0a8a24f452968014f3f55ae63faf3e46d3c460ccff1ed4bd395424b3514c9e0d938cc950219e6f8909cdfa44307a7322ef52a4a77fca129e9ee2391bf27a894d9607e41707646f6d61696e73000030000100000e1000880100030803010001c3298356ce01a95de2190cda895362db03fd8d7ac1aabe303826ffbaf68a4ae2008ed2e449f976273b66677097a6a1988a45dd9d387502182adf8d0542a833bdd9d45ba9ae42e9657c21cb495a764a8dff7f02679ee3f6228a35d5872febef696626b6a30499aceaa21ca5aa23cbd13a3e5acce6ad9d63e53b000a5466d2612107646f6d61696e73000030000100000e10010801010308030100019b8afc284627031fe380b8b7ac3e59f8ba952405c6c7af62c5cafd85acf950353eeaa7ea845b85af3912eb6a618b9f835866644fe217516fddaaf5a40ea76664602032d4ae83ff846c4b46940b6bfc5e54f5dd683bfaeb60a8a8572a15e0b94b5dceee08b1974ce9d2e1ecfd191afd5ba56eb2622233b97b85bcb01def82d38fcddbdb6d2075473cc5a44e9dfe9e183dac43e72374cd625df2d8a0fd547760175cf3f73ead153f57c34cfecaa0ada67e899b4a673768983e0e71fcfbd67e190e9ab1f57cad6ae0d478575c85657f9197fb71a4f9fef8847be3ab216416f0818a7fde3e7a2757405679e9d35460204b605d01b1d0a4e82fe61fb3e2bb79b937c3","sig":"0x063875f60235d4fb32936773bb44f2bee0036362b6a3e3974acb394670f96aed0f323e1337d77931202bb743e6b323ea142621bdef105cffeb6fb1702a0ddbdb8bd8814a2139ed33dfe536abdddfc529305c83ca377387162736ebbd671a4f1aaa10ecff762ddb90fae9c06dadbcf991d6251dd8f91c6921605af5c363745a60ca74a1402f0c986c315903ad9886b7b633610700468341a4ffd185e03e276cffffed6dfcc09554d90a12337b5ca4e6bb8fe4e05ad084d7f5847c10cb6c6a6d9de295dce0c31165df3ad7ca77e45c5df8c51652c0d9f88d3b7cdcc4d61ca229ca7505b0b1e84c1f5fde21270a64cde02611a1ed765636b25b43723d001d93fa69"},{"rrset":"0x002b080200000e1065bbbac1659ffd316fcf07646f6d61696e73000570756c736507646f6d61696e7300002b000100000e10002409430d02ea3f78866a9690e321c08b39a573684222dea9db0d601553f6fea7b3929ca9a6","sig":"0xb41f0881566ba3908e14ba7668245b9c47ee9c4038b8079647bc099674170da9507f792009b5e12c13b0e0f5788728a3467429bcefd89025ec7d250857412b11017e16d341b1f70731f88df102db82032c02a0698f10d93eaf2048b05bc667b5b9716c9aca484c617626dc86e997db98140f855cb02d9167f404a038a3eb6acf"},{"rrset":"0x00300d0200000e1065f2cf7c65a263fc09430570756c736507646f6d61696e73000570756c736507646f6d61696e73000030000100000e1000440100030da09311112cf9138818cd2feae970ebbd4d6a30f6088c25b325a39abbc5cd1197aa098283e5aaf421177c2aa5d714992a9957d1bcc18f98cd71f1f1806b65e1480570756c736507646f6d61696e73000030000100000e1000440101030d99db2cc14cabdc33d6d77da63a2f15f71112584f234e8d1dc428e39e8a4a97e1aa271a555dc90701e17e2a4c4b6f120b7c32d44f4ac02bd894cf2d4be7778a19","sig":"0xe40d8839edcb0f6fa0e1c9b9357d6e0d2f75e926ea936e58199bc4d2ebf8316a652c58e34d21c964348451902deb5a23fc6c75d795c4610cb2479f47ad82fb49"},{"rrset":"0x00100d030000012c65a5726665a2b34686c90570756c736507646f6d61696e7300045f706e730570756c736507646f6d61696e7300001000010000012c002d2c613d307833396338383631313531316436313644463039423864333232323733663746446444624546334363","sig":"0x2ca96e6fc805a45a40b0589bf8beb5051aa397c6bb291901c9c2663a94e3163b81f9506aa1c842111e5a3e55223d4e0c96cefa2613057fbfa5f2b8e4e6050da9"}],
  //   '0x98a31E32d3B844AD481ffd7DA0168d5f92e42803',
  //   '0x39c88611511d616DF09B8d322273f7FDdDbEF3Cc',
  //   {
  //     gasLimit: '10000000',
  //     gasPrice: '1000000000000'
  //   }
  // )
  // console.log(`Submitting ${tx.hash}`);
  // await tx.wait(2);

  // const provider = new ethers.providers.JsonRpcProvider(
  //   'https://rpc.v4.testnet.pulsechain.com',
  // )
  // const signer = new ethers.Wallet(
  //   '0xe12ebc5956856fce22bf3e3d7b8ee1d6887dba47d3f2dfe8ed45629ab22ffb75',
  //   provider,
  // )
  // const tx = await signer.sendTransaction({
  //   from: '0x84631c1E9D354db44147fe9C1b4E0AD590839Afc',
  //   to: '0x153A16f8441B08B7266C13c17a2F984A116c9150',
  //   value: '0x0',
  //   // data: '0x06963218000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084631c1e9d354db44147fe9c1b4e0ad590839afc000000000000000000000000000000000000000000000000000000000000000f0570756c736507646f6d61696e73000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000048000000000000000000000000000000000000000000000000000000000000006600000000000000000000000000000000000000000000000000000000000000a600000000000000000000000000000000000000000000000000000000000000bc00000000000000000000000000000000000000000000000000000000000000d60000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000239003008000002a30065badf00659f2f804f660000003000010002a30001080100030803010001e9ed09c2049dd2e1d9048afa91c5abf3e4282c22a31b7be5deea34e52e4cf328d0572d7bf35bc033dba1cbdb67f78d6f9455ff141d6a968901243fa032ecab30f41f5f8990736eb8a73624bb69331838825484e029d15d3d829c54d6e48c0e4442fecdea991f2ebc397cb99e05b92802db7af458460feadaa15ecd1b42490d249e6c8fc2016c8215582cac22d75ea8c70114e7267a5bb9e958cc6de59f90b3c7623cd5ab4b96972e026dad6506208b857ee6705d8ce21913ffcf7a3511f328f73654d7d28ba299282d75fb2ecfdd8825dd4847495d3b4503cc34fce290be2b8979b7cab1ca049424ecc2e915675557e606da144a36c5684727d528eb7c18693900003000010002a30001080101030803010001acffb409bcc939f831f7a1e5ec88f7a59255ec53040be432027390a4ce896d6f9086f3c5e177fbfe118163aaec7af1462c47945944c4e2c026be5e98bbcded25978272e1e3e079c5094d573f0e83c92f02b32d3513b1550b826929c80dd0f92cac966d17769fd5867b647c3f38029abdc48152eb8f207159ecc5d232c7c1537c79f4b7ac28ff11682f21681bf6d6aba555032bf6f9f036beb2aaa5b3778d6eebfba6bf9ea191be4ab0caea759e2f773a1f9029c73ecb8d5735b9321db085f1b8e2d8038fe2941992548cee0d67dd4547e11dd63af9c9fc1c5466fb684cf009d7197c2cf79e792ab501e6a8a1ca519af2cb9b5f6367e94c0d47502451357be1b50000000000000000000000000000000000000000000000000000000000000000000000000001001028410868c4b93917d2dceecb93bab829b8570770a6944bfab607bc76ed843d5909c4e5ab544a946086c6442121892b9b881da0ad1287a4eef492c2423bb7dcf89e2666764bfe6d0f283dd2a9de35732ded3535b1f218108647982ef4f3a22a4699fcdd8d20b763ce1890448117cab50594094a427c730ac8cf733f0d795946ae22bcaad2a31bfbeff20668aeda199b761b77f73d3e2e65d934de76ec6412f9f2696083bc2b19a27419314e90d1b143aa39e0fbe63f8eb513ebc6cdb88e0d2dfdf9397beb85732e626422e7fce46e2d6130681d33ec25a78110876e78c3d45281f5b25075f5e62f491ae3536f470bc84239e4fd3f42a1fc6a3ea90fb53905a9000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000004a002b08010001518065b5df5065a4adc078b70007646f6d61696e7300002b000100015180002499ee080274ace87d5605021df3e619563249119e01d0975f30455df1bcfb3df54329f17b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010084c18d8d065ccff0040517ae6ba57f01e5910ff063f225e70985bf3147b5e879927199bd35d8eb2f7c1bd8f189043dab5dbb18cd62a7e922b05cc82fa3f8aa04e202502ae856356cae466e959a368ed123387170be597677bb0862b740a63d18435ffb02f292a97846e95e5e82ee0211f009f83a29bcf4273509eb9b5fd7d69ae21090f27416722ff5aa84b5c07fd43595995a3d164eccb84f692ee1c54a25385455ba3838eb0721d3490fa03ef825121738ad1609ec61fd8baa8d40d87d76e5ee536a943074679310e51aac99be5b4a5b5c2473d4fb07f352294c249964fad14dd2315e81d71ddc3fc926fe7ef4fd2aaa493c37e76b476b51d69e515e503c00000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002e0000000000000000000000000000000000000000000000000000000000000026c0030080100000e1065bbbac1659ffd3199ee07646f6d61696e730007646f6d61696e73000030000100000e1000880100030803010001c2523443a45e2fdd12ba60b7e1231fb5fbb211312287bb1f15928a273a19439f55ce38cdadc4ca209dfa18965cc9a9411cf85823ba6d954a10abf74d0a8a24f452968014f3f55ae63faf3e46d3c460ccff1ed4bd395424b3514c9e0d938cc950219e6f8909cdfa44307a7322ef52a4a77fca129e9ee2391bf27a894d9607e41707646f6d61696e73000030000100000e1000880100030803010001c3298356ce01a95de2190cda895362db03fd8d7ac1aabe303826ffbaf68a4ae2008ed2e449f976273b66677097a6a1988a45dd9d387502182adf8d0542a833bdd9d45ba9ae42e9657c21cb495a764a8dff7f02679ee3f6228a35d5872febef696626b6a30499aceaa21ca5aa23cbd13a3e5acce6ad9d63e53b000a5466d2612107646f6d61696e73000030000100000e10010801010308030100019b8afc284627031fe380b8b7ac3e59f8ba952405c6c7af62c5cafd85acf950353eeaa7ea845b85af3912eb6a618b9f835866644fe217516fddaaf5a40ea76664602032d4ae83ff846c4b46940b6bfc5e54f5dd683bfaeb60a8a8572a15e0b94b5dceee08b1974ce9d2e1ecfd191afd5ba56eb2622233b97b85bcb01def82d38fcddbdb6d2075473cc5a44e9dfe9e183dac43e72374cd625df2d8a0fd547760175cf3f73ead153f57c34cfecaa0ada67e899b4a673768983e0e71fcfbd67e190e9ab1f57cad6ae0d478575c85657f9197fb71a4f9fef8847be3ab216416f0818a7fde3e7a2757405679e9d35460204b605d01b1d0a4e82fe61fb3e2bb79b937c300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100063875f60235d4fb32936773bb44f2bee0036362b6a3e3974acb394670f96aed0f323e1337d77931202bb743e6b323ea142621bdef105cffeb6fb1702a0ddbdb8bd8814a2139ed33dfe536abdddfc529305c83ca377387162736ebbd671a4f1aaa10ecff762ddb90fae9c06dadbcf991d6251dd8f91c6921605af5c363745a60ca74a1402f0c986c315903ad9886b7b633610700468341a4ffd185e03e276cffffed6dfcc09554d90a12337b5ca4e6bb8fe4e05ad084d7f5847c10cb6c6a6d9de295dce0c31165df3ad7ca77e45c5df8c51652c0d9f88d3b7cdcc4d61ca229ca7505b0b1e84c1f5fde21270a64cde02611a1ed765636b25b43723d001d93fa69000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000058002b080200000e1065bbbac1659ffd316fcf07646f6d61696e73000570756c736507646f6d61696e7300002b000100000e10002409430d02ea3f78866a9690e321c08b39a573684222dea9db0d601553f6fea7b3929ca9a600000000000000000000000000000000000000000000000000000000000000000000000000000080b41f0881566ba3908e14ba7668245b9c47ee9c4038b8079647bc099674170da9507f792009b5e12c13b0e0f5788728a3467429bcefd89025ec7d250857412b11017e16d341b1f70731f88df102db82032c02a0698f10d93eaf2048b05bc667b5b9716c9aca484c617626dc86e997db98140f855cb02d9167f404a038a3eb6acf0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000db00300d0200000e1065f2cf7c65a263fc09430570756c736507646f6d61696e73000570756c736507646f6d61696e73000030000100000e1000440100030da09311112cf9138818cd2feae970ebbd4d6a30f6088c25b325a39abbc5cd1197aa098283e5aaf421177c2aa5d714992a9957d1bcc18f98cd71f1f1806b65e1480570756c736507646f6d61696e73000030000100000e1000440101030d99db2cc14cabdc33d6d77da63a2f15f71112584f234e8d1dc428e39e8a4a97e1aa271a555dc90701e17e2a4c4b6f120b7c32d44f4ac02bd894cf2d4be7778a1900000000000000000000000000000000000000000000000000000000000000000000000040e40d8839edcb0f6fa0e1c9b9357d6e0d2f75e926ea936e58199bc4d2ebf8316a652c58e34d21c964348451902deb5a23fc6c75d795c4610cb2479f47ad82fb49000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000006c00100d030000012c65a6af2565a3f00586c90570756c736507646f6d61696e7300045f706e730570756c736507646f6d61696e7300001000010000012c002d2c613d3078383436333163314539443335346462343431343766653943316234453041443539303833394166630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004029a4d89c4fbed92d3f61e29d6b9a756486f7ca99dcf17a3a7e9500c324a48ff328e27038ed5311eeea3a9a63e19a8bca18d53bd32f8eefafc52fc9c816db9632',
  //   data: '0x06963218000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000a4932840a30f0a1c73151c4817efdddf8583283d00000000000000000000000084631c1e9d354db44147fe9c1b4e0ad590839afc000000000000000000000000000000000000000000000000000000000000000f0570756c736507646f6d61696e73000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000048000000000000000000000000000000000000000000000000000000000000006600000000000000000000000000000000000000000000000000000000000000a600000000000000000000000000000000000000000000000000000000000000bc00000000000000000000000000000000000000000000000000000000000000d60000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002a00000000000000000000000000000000000000000000000000000000000000239003008000002a30065badf00659f2f804f660000003000010002a30001080100030803010001e9ed09c2049dd2e1d9048afa91c5abf3e4282c22a31b7be5deea34e52e4cf328d0572d7bf35bc033dba1cbdb67f78d6f9455ff141d6a968901243fa032ecab30f41f5f8990736eb8a73624bb69331838825484e029d15d3d829c54d6e48c0e4442fecdea991f2ebc397cb99e05b92802db7af458460feadaa15ecd1b42490d249e6c8fc2016c8215582cac22d75ea8c70114e7267a5bb9e958cc6de59f90b3c7623cd5ab4b96972e026dad6506208b857ee6705d8ce21913ffcf7a3511f328f73654d7d28ba299282d75fb2ecfdd8825dd4847495d3b4503cc34fce290be2b8979b7cab1ca049424ecc2e915675557e606da144a36c5684727d528eb7c18693900003000010002a30001080101030803010001acffb409bcc939f831f7a1e5ec88f7a59255ec53040be432027390a4ce896d6f9086f3c5e177fbfe118163aaec7af1462c47945944c4e2c026be5e98bbcded25978272e1e3e079c5094d573f0e83c92f02b32d3513b1550b826929c80dd0f92cac966d17769fd5867b647c3f38029abdc48152eb8f207159ecc5d232c7c1537c79f4b7ac28ff11682f21681bf6d6aba555032bf6f9f036beb2aaa5b3778d6eebfba6bf9ea191be4ab0caea759e2f773a1f9029c73ecb8d5735b9321db085f1b8e2d8038fe2941992548cee0d67dd4547e11dd63af9c9fc1c5466fb684cf009d7197c2cf79e792ab501e6a8a1ca519af2cb9b5f6367e94c0d47502451357be1b50000000000000000000000000000000000000000000000000000000000000000000000000001001028410868c4b93917d2dceecb93bab829b8570770a6944bfab607bc76ed843d5909c4e5ab544a946086c6442121892b9b881da0ad1287a4eef492c2423bb7dcf89e2666764bfe6d0f283dd2a9de35732ded3535b1f218108647982ef4f3a22a4699fcdd8d20b763ce1890448117cab50594094a427c730ac8cf733f0d795946ae22bcaad2a31bfbeff20668aeda199b761b77f73d3e2e65d934de76ec6412f9f2696083bc2b19a27419314e90d1b143aa39e0fbe63f8eb513ebc6cdb88e0d2dfdf9397beb85732e626422e7fce46e2d6130681d33ec25a78110876e78c3d45281f5b25075f5e62f491ae3536f470bc84239e4fd3f42a1fc6a3ea90fb53905a9000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000004a002b08010001518065b5df5065a4adc078b70007646f6d61696e7300002b000100015180002499ee080274ace87d5605021df3e619563249119e01d0975f30455df1bcfb3df54329f17b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010084c18d8d065ccff0040517ae6ba57f01e5910ff063f225e70985bf3147b5e879927199bd35d8eb2f7c1bd8f189043dab5dbb18cd62a7e922b05cc82fa3f8aa04e202502ae856356cae466e959a368ed123387170be597677bb0862b740a63d18435ffb02f292a97846e95e5e82ee0211f009f83a29bcf4273509eb9b5fd7d69ae21090f27416722ff5aa84b5c07fd43595995a3d164eccb84f692ee1c54a25385455ba3838eb0721d3490fa03ef825121738ad1609ec61fd8baa8d40d87d76e5ee536a943074679310e51aac99be5b4a5b5c2473d4fb07f352294c249964fad14dd2315e81d71ddc3fc926fe7ef4fd2aaa493c37e76b476b51d69e515e503c00000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002e0000000000000000000000000000000000000000000000000000000000000026c0030080100000e1065bbbac1659ffd3199ee07646f6d61696e730007646f6d61696e73000030000100000e1000880100030803010001c2523443a45e2fdd12ba60b7e1231fb5fbb211312287bb1f15928a273a19439f55ce38cdadc4ca209dfa18965cc9a9411cf85823ba6d954a10abf74d0a8a24f452968014f3f55ae63faf3e46d3c460ccff1ed4bd395424b3514c9e0d938cc950219e6f8909cdfa44307a7322ef52a4a77fca129e9ee2391bf27a894d9607e41707646f6d61696e73000030000100000e1000880100030803010001c3298356ce01a95de2190cda895362db03fd8d7ac1aabe303826ffbaf68a4ae2008ed2e449f976273b66677097a6a1988a45dd9d387502182adf8d0542a833bdd9d45ba9ae42e9657c21cb495a764a8dff7f02679ee3f6228a35d5872febef696626b6a30499aceaa21ca5aa23cbd13a3e5acce6ad9d63e53b000a5466d2612107646f6d61696e73000030000100000e10010801010308030100019b8afc284627031fe380b8b7ac3e59f8ba952405c6c7af62c5cafd85acf950353eeaa7ea845b85af3912eb6a618b9f835866644fe217516fddaaf5a40ea76664602032d4ae83ff846c4b46940b6bfc5e54f5dd683bfaeb60a8a8572a15e0b94b5dceee08b1974ce9d2e1ecfd191afd5ba56eb2622233b97b85bcb01def82d38fcddbdb6d2075473cc5a44e9dfe9e183dac43e72374cd625df2d8a0fd547760175cf3f73ead153f57c34cfecaa0ada67e899b4a673768983e0e71fcfbd67e190e9ab1f57cad6ae0d478575c85657f9197fb71a4f9fef8847be3ab216416f0818a7fde3e7a2757405679e9d35460204b605d01b1d0a4e82fe61fb3e2bb79b937c300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100063875f60235d4fb32936773bb44f2bee0036362b6a3e3974acb394670f96aed0f323e1337d77931202bb743e6b323ea142621bdef105cffeb6fb1702a0ddbdb8bd8814a2139ed33dfe536abdddfc529305c83ca377387162736ebbd671a4f1aaa10ecff762ddb90fae9c06dadbcf991d6251dd8f91c6921605af5c363745a60ca74a1402f0c986c315903ad9886b7b633610700468341a4ffd185e03e276cffffed6dfcc09554d90a12337b5ca4e6bb8fe4e05ad084d7f5847c10cb6c6a6d9de295dce0c31165df3ad7ca77e45c5df8c51652c0d9f88d3b7cdcc4d61ca229ca7505b0b1e84c1f5fde21270a64cde02611a1ed765636b25b43723d001d93fa69000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000058002b080200000e1065bbbac1659ffd316fcf07646f6d61696e73000570756c736507646f6d61696e7300002b000100000e10002409430d02ea3f78866a9690e321c08b39a573684222dea9db0d601553f6fea7b3929ca9a600000000000000000000000000000000000000000000000000000000000000000000000000000080b41f0881566ba3908e14ba7668245b9c47ee9c4038b8079647bc099674170da9507f792009b5e12c13b0e0f5788728a3467429bcefd89025ec7d250857412b11017e16d341b1f70731f88df102db82032c02a0698f10d93eaf2048b05bc667b5b9716c9aca484c617626dc86e997db98140f855cb02d9167f404a038a3eb6acf0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000db00300d0200000e1065f2cf7c65a263fc09430570756c736507646f6d61696e73000570756c736507646f6d61696e73000030000100000e1000440100030da09311112cf9138818cd2feae970ebbd4d6a30f6088c25b325a39abbc5cd1197aa098283e5aaf421177c2aa5d714992a9957d1bcc18f98cd71f1f1806b65e1480570756c736507646f6d61696e73000030000100000e1000440101030d99db2cc14cabdc33d6d77da63a2f15f71112584f234e8d1dc428e39e8a4a97e1aa271a555dc90701e17e2a4c4b6f120b7c32d44f4ac02bd894cf2d4be7778a1900000000000000000000000000000000000000000000000000000000000000000000000040e40d8839edcb0f6fa0e1c9b9357d6e0d2f75e926ea936e58199bc4d2ebf8316a652c58e34d21c964348451902deb5a23fc6c75d795c4610cb2479f47ad82fb49000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000006c00100d030000012c65a6b17565a3f25586c90570756c736507646f6d61696e7300045f706e730570756c736507646f6d61696e7300001000010000012c002d2c613d307838343633316331453944333534646234343134376665394331623445304144353930383339416663000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000405a676b9bf81f626249df15cde43ee520066c6727c7ce5542ca457e52e5e62ce883d32bdf701eded7792f6133daa2b79cb9a9c4c5b901ca0ad21a9457a6970c4d',
  //   // gasLimit: '10000000',
  //   // gasPrice: '100000000000'
  // })
  // console.log(tx.hash)
  // await tx.wait(2)
}

func.id = 'test-error'
func.tags = ['TestError']
func.dependencies = []

export default func
