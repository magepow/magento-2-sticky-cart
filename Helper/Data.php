<?php
/*
 * @category: Magepow
 * @copyright: Copyright (c) 2014 Magepow (http://www.magepow.com/)
 * @licence: http://www.magepow.com/license-agreement
 * @author: MichaelHa
 * @create date: 2019-06-14 17:19:50
 * @LastEditors: MichaelHa
 * @LastEditTime: 2019-06-29 12:45:32
 */
namespace Magepow\Stickycart\Helper;

class Data extends \Magento\Framework\App\Helper\AbstractHelper
{
    public function getConfig($cfg='')
    {
        return $this->scopeConfig->getValue(
            $cfg,
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }
    public function isEnabled()
    {
        return $this->scopeConfig->getValue(
            'stickycart/general/enabled',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }
    public function getWidthImage()
    {
        return $this->scopeConfig->getValue(
            'stickycart/general/width_image',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }
    public function getHeightImage()
    {
        return $this->scopeConfig->getValue(
            'stickycart/general/height_image',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }
    public function getHeightScroll()
    {
        return $this->scopeConfig->getValue(
            'stickycart/general/height_scroll',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }

    public function getExcludeProducts()
    {
        return $this->scopeConfig->getValue(
            'stickycart/general/exclude_products',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }
}