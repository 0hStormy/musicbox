# MSB (MusicBox)

A wacky and unreadable way to store and play sequenced music!

## How to use

Let's look at an example file in the msb format:

```js
60:1:0|62:1:0|64:1:0|65:1:0
67:1:0|69:1:0|71:1:0|72:1:0
//
60:1:13|62:1:13|64:1:13|65:1:13
67:1:13|69:1:13|71:1:13|72:1:13
//
60:1:18|60:1:21|60:1:19|60:1:21
60:1:18|60:1:21|60:1:19|60:1:21
60:1:18|60:1:21|60:1:19|60:1:21
60:1:18|60:1:21|60:1:19|60:1:23
```

A note is comprised of a few parts called indexes. The first index is the midi note number, `60` would be middle C. The second index is the length, `1` is a quarter note, `0.5` is an eighth note, you get the idea. The last index is the instrument being used, `0` is a piano and `13` is a saxophone. Each index is separated by a colon (`:`) and each note is separated by a vertical pipe (`|`). `//` is used to separate sections of a song, recommended for readability but not required to play/make a song.

This is a single quarter note that plays middle C with a acoustic piano:
```js
60:1:0
```

### Instrument List

There are 24 instruments but the list starts at 0.

0. Acoustic Piano
1. Electric Piano
2. Music Box
3. Vibraphone
4. Orgran
5. Acoustic Guitar
6. Electric Guitar
7. Picked Bass
8. Stringed Instrument
9. Harp
10. Vox (Synth Voice)
11. Brass Section
12. Trumpet
13. Sax
14. Clarinet
15. Flute
16. Square Wave
17. Saw Wave
18. Kick Drum
19. Snare Drum
20. Tom
21. Closed Hi-Hat
22. Open Hi-Hat
23. Crash Cymbol

### MIDI Note Map

<table width="600" border="1">
    <tr> 
        <td><div align="center"><strong>Octave</strong></div></td>
        <td><div align="center"><strong>C</strong></div></td>
        <td><div align="center"><strong>C#/Db</strong></div></td>
        <td><div align="center"><strong>D</strong></div></td>
        <td><div align="center"><strong>D#/Eb</strong></div></td>
        <td><div align="center"><strong>E</strong></div></td>
        <td><div align="center"><strong>F</strong></div></td>
        <td><div align="center"><strong>F#/Gb</strong></div></td>
        <td><div align="center"><strong>G</strong></div></td>
        <td><div align="center"><strong>G#/Ab</strong></div></td>
        <td><div align="center"><strong>A</strong></div></td>
        <td><div align="center"><strong>A#/Bb</strong></div></td>
        <td><div align="center"><strong>B</strong></div></td>
    </tr>
    <tr> 
        <td><div align="center">-1</div></td>
        <td><div align="center">0</div></td>
        <td><div align="center">1</div></td>
        <td><div align="center">2</div></td>
        <td><div align="center">3</div></td>
        <td><div align="center">4</div></td>
        <td><div align="center">5</div></td>
        <td><div align="center">6</div></td>
        <td><div align="center">7</div></td>
        <td><div align="center">8</div></td>
        <td><div align="center">9</div></td>
        <td><div align="center">10</div></td>
        <td><div align="center">11</div></td>
    </tr>
    <tr> 
        <td><div align="center">-1</div></td>
        <td><div align="center">12</div></td>
        <td><div align="center">13</div></td>
        <td><div align="center">14</div></td>
        <td><div align="center">15</div></td>
        <td><div align="center">16</div></td>
        <td><div align="center">17</div></td>
        <td><div align="center">18</div></td>
        <td><div align="center">19</div></td>
        <td><div align="center">20</div></td>
        <td><div align="center">21</div></td>
        <td><div align="center">22</div></td>
        <td><div align="center">23</div></td>
    </tr>
    <tr> 
        <td><div align="center">0</div></td>
        <td><div align="center">24</div></td>
        <td><div align="center">25</div></td>
        <td><div align="center">26</div></td>
        <td><div align="center">27</div></td>
        <td><div align="center">28</div></td>
        <td><div align="center">29</div></td>
        <td><div align="center">30</div></td>
        <td><div align="center">31</div></td>
        <td><div align="center">32</div></td>
        <td><div align="center">33</div></td>
        <td><div align="center">34</div></td>
        <td><div align="center">35</div></td>
    </tr>
    <tr> 
        <td><div align="center">1</div></td>
        <td><div align="center">36</div></td>
        <td><div align="center">37</div></td>
        <td><div align="center">38</div></td>
        <td><div align="center">39</div></td>
        <td><div align="center">40</div></td>
        <td><div align="center">41</div></td>
        <td><div align="center">42</div></td>
        <td><div align="center">43</div></td>
        <td><div align="center">44</div></td>
        <td><div align="center">45</div></td>
        <td><div align="center">46</div></td>
        <td><div align="center">47</div></td>
    </tr>
    <tr> 
        <td><div align="center">2</div></td>
        <td><div align="center">48</div></td>
        <td><div align="center">49</div></td>
        <td><div align="center">50</div></td>
        <td><div align="center">51</div></td>
        <td><div align="center">52</div></td>
        <td><div align="center">53</div></td>
        <td><div align="center">54</div></td>
        <td><div align="center">55</div></td>
        <td><div align="center">56</div></td>
        <td><div align="center">57</div></td>
        <td><div align="center">58</div></td>
        <td><div align="center">59</div></td>
    </tr>
    <tr> 
        <td><div align="center">3</div></td>
        <td><div align="center">60</div></td>
        <td><div align="center">61</div></td>
        <td><div align="center">62</div></td>
        <td><div align="center">63</div></td>
        <td><div align="center">64</div></td>
        <td><div align="center">65</div></td>
        <td><div align="center">66</div></td>
        <td><div align="center">67</div></td>
        <td><div align="center">68</div></td>
        <td><div align="center">69</div></td>
        <td><div align="center">70</div></td>
        <td><div align="center">71</div></td>
    </tr>
    <tr> 
        <td><div align="center">4</div></td>
        <td><div align="center">72</div></td>
        <td><div align="center">73</div></td>
        <td><div align="center">74</div></td>
        <td><div align="center">75</div></td>
        <td><div align="center">76</div></td>
        <td><div align="center">77</div></td>
        <td><div align="center">78</div></td>
        <td><div align="center">79</div></td>
        <td><div align="center">80</div></td>
        <td><div align="center">81</div></td>
        <td><div align="center">82</div></td>
        <td><div align="center">83</div></td>
    </tr>
    <tr> 
        <td><div align="center">5</div></td>
        <td><div align="center">84</div></td>
        <td><div align="center">85</div></td>
        <td><div align="center">86</div></td>
        <td><div align="center">87</div></td>
        <td><div align="center">88</div></td>
        <td><div align="center">89</div></td>
        <td><div align="center">90</div></td>
        <td><div align="center">91</div></td>
        <td><div align="center">92</div></td>
        <td><div align="center">93</div></td>
        <td><div align="center">94</div></td>
        <td><div align="center">95</div></td>
    </tr>
    <tr> 
        <td><div align="center">6</div></td>
        <td><div align="center">96</div></td>
        <td><div align="center">97</div></td>
        <td><div align="center">98</div></td>
        <td><div align="center">99</div></td>
        <td><div align="center">100</div></td>
        <td><div align="center">101</div></td>
        <td><div align="center">102</div></td>
        <td><div align="center">103</div></td>
        <td><div align="center">104</div></td>
        <td><div align="center">104</div></td>
        <td><div align="center">106</div></td>
        <td><div align="center">107</div></td>
    </tr>
    <tr> 
        <td><div align="center">7</div></td>
        <td><div align="center">108</div></td>
        <td><div align="center">109</div></td>
        <td><div align="center">110</div></td>
        <td><div align="center">111</div></td>
        <td><div align="center">112</div></td>
        <td><div align="center">113</div></td>
        <td><div align="center">114</div></td>
        <td><div align="center">115</div></td>
        <td><div align="center">116</div></td>
        <td><div align="center">117</div></td>
        <td><div align="center">118</div></td>
        <td><div align="center">119</div></td>
    </tr>
    <tr> 
        <td><div align="center">8</div></td>
        <td><div align="center">120</div></td>
        <td><div align="center">121</div></td>
        <td><div align="center">122</div></td>
        <td><div align="center">123</div></td>
        <td><div align="center">124</div></td>
        <td><div align="center">125</div></td>
        <td><div align="center">126</div></td>
        <td><div align="center">127</div></td>
        <td><div align="center">-</div></td>
        <td><div align="center">-</div></td>
        <td><div align="center">-</div></td>
        <td><div align="center">-</div></td>
    </tr>
</table>

Credits to [Computer Music Resource](https://computermusicresource.com/midikeys.html) for providing this mid note map.