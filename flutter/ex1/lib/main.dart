import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  State<MyHomePage> createState() => new MyHomePageState();
}

class MyHomePageState extends State<MyHomePage> {
  final List<WordPair> words = <WordPair>[];
  final Set<WordPair> selectedWords = new Set<WordPair>();
  MyHomePageState() {
    words.addAll(generateWordPairs().take(10));
  }
  @override
  Widget build(BuildContext context) {
    Widget _buildRow(index) {
      return new ListTile(
          title: new Text(words.elementAt(index).asPascalCase),
          leading: new Icon(
              selectedWords.contains(words.elementAt(index))
              ? Icons.check_box
              : Icons.check_box_outline_blank),
          onTap: () {
            setState(() {
              if (selectedWords.contains(words.elementAt(index))) {
                selectedWords.remove(words.elementAt(index));
              } else
                selectedWords.add(words.elementAt(index));
            });
          });
    }

    return new Scaffold(
      appBar: new AppBar(
        title: new Center(
          child: new Text('Bài tập')
        ),
        actions: <Widget>[
          new IconButton(
            icon: new Icon(
              Icons.menu
            ),
            onPressed: () {
              final pageRoute = new MaterialPageRoute(builder: (context) {
                final listTiles = selectedWords.map((item) {
                  return new ListTile(
                    title: new Text(
                      item.asPascalCase,
                      style: new TextStyle(
                        fontWeight: FontWeight.bold
                      )
                    ),
                    leading: new Icon(
                      Icons.check_box
                    ),
                  );
                });
                return new Scaffold(
                  appBar: new AppBar(
                    title: new Text('Selected Words')
                  ),
                  body: new ListView(
                    children: listTiles.toList(),
                  )
                );
              });
              Navigator.of(context).push(pageRoute);
            },
          )
        ],
      ),
      body: new Center(
        child: new ListView.separated(
          itemCount: words.length,
          itemBuilder: (BuildContext context, int index) {
            return _buildRow(index);
          },
          separatorBuilder: (BuildContext context, int index) => const Divider(),
        )
      )
    );
  }
}
