---
icon: pen-to-square
date: 2022-01-11
category:
  - 水果
  - 草莓
tag:
  - 红
  - 小
---

# 草莓

## 标题 2

这里是内容。
<AudioPlayer
  src="/assets/music/周杰伦-七里香.mp3"
  title="七里香-周杰伦"
  poster="/logo.svg"
/>

### 标题 3

这里是内容。

::: echarts 1标题

```js
  // 此处为 ECharts 图表配置
  const oneDay = 86400000;
  const data = [];
  let now = new Date(1997, 9, 3);
  let value = Math.random() * 1000;

  const randomData = () => {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
        Math.round(value),
      ],
    };
  };

  for (let i = 0; i < 1000; i++) data.push(randomData());

  const option = {
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false,
      },
    },
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: true,
        },
        dataView: {
          show: true,
          readOnly: false,
        },
        restore: {
          show: true,
        },
        saveAsImage: {
          show: true,
        },
      },
    },
    series: [
      {
        name: "Fake Data",
        type: "line",
        showSymbol: false,
        data: data,
      },
    ],
  };
  const timeId = setInterval(() => {
    if (myChart._disposed) return clearInterval(timeId);

    for (let i = 0; i < 5; i++) {
      data.shift();
      data.push(randomData());
    }
    myChart.setOption({
      series: [
        {
          data: data,
        },
      ],
    });
  }, 1000);
```

:::

