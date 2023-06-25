function createComponent() {
    return `<!-- 灯笼代码 -->
    <div class="deng-box2">
        <div class="deng">
            <div class="xian">
            </div>
            <div class="deng-a">
                <div class="deng-b">
                    <div class="deng-t">0</div>
                </div>
            </div>
            <div class="shui shui-a">
                <div class="shui-c">
                </div>
                <div class="shui-b"></div>
            </div>
        </div>
    </div>
    <div class="deng-box3">
        <div class="deng">
            <div class="xian">
            </div>
            <div class="deng-a">
                <div class="deng-b">
                    <div class="deng-t">4</div>
                </div>
            </div>
            <div class="shui shui-a">
                <div class="shui-c"></div>
                <div class="shui-b">
                </div>
            </div>
        </div>
    </div>
    <div class="deng-box1">
        <div class="deng">
            <div class="xian">
            </div>
            <div class="deng-a">
                <div class="deng-b">
                    <div class="deng-t">年</div>
                </div>
            </div>
            <div class="shui shui-a">
                <div class="shui-c"></div>
                <div class="shui-b"></div>
            </div>
        </div>
    </div>
    <div class="deng-box">
        <div class="deng">
            <div class="xian">
            </div>
            <div class="deng-a">
                <div class="deng-b">
                    <div class="deng-t">周</div>
                </div>
            </div>
            <div class="shui shui-a">
                <div class="shui-c">
                </div>
                <div class="shui-b"></div>
            </div>
        </div>
    </div>`;
  }
  
  window.addEventListener("load", function() {
    const componentContainer = document.querySelector("#lantern-component");
    componentContainer.innerHTML = createComponent();
  });