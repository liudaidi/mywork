var Extract=require('extract-text-webpack-plugin');
module.exports={
    entry:{
        main:'./index.js'
    },
    output:{
        path:__dirname+'/dist',
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                use:Extract.extract({
                    use:['css-loader']
                })
            }
        ]
    },
    plugins:[
        new Extract('abc.css')
    ]
}